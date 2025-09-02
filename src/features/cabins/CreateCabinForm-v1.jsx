import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import toast from "react-hot-toast";
import FormsRow from "../../ui/FormsRow";

import { createCabin } from "../../services/apiCabins";



function CreateCabinForm({cabinToEdit}) {
  const queryClient = useQueryClient();
  const {register, handleSubmit, reset, getValues, formState} = useForm();
  console.log(getValues().regularPrice);
  const {errors} = formState;
  const {mutate, isLoading: isCreating} = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success('New cabin created');
      queryClient.invalidateQueries({queryKey: ['cabins']});
      reset();
      console.log(isCreating);
    },
    onError: (err) => toast.error(err.message),
  })

  function onSubmit(data) {
    // mutate({...data, image: data.image.at(0)});
    mutate({...data, image: data.image[0]});
    console.log(data.image[0]);
  }

  function onError(errors){
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>

      <FormsRow label='Cabin name' error={errors?.name?.message}>
        <Input disabled={isCreating} type="text" id="name" {...register('name', {
          required: 'Field should not be empty',
        })}/>
      </FormsRow>

      <FormsRow label='Max capacity' error={errors?.maxCapacity?.message}>
        <Input disabled={isCreating} type="number" id="maxCapacity" {...register('maxCapacity', {
          required: 'Field should not be empty',
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })}/>
      </FormsRow>

      <FormsRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input disabled={isCreating} type="number" id="regularPrice" {...register('regularPrice', {
          required: 'Field should not be empty',
          min: {
            value: 1,
            message: "Price shoud have some real value"
          }
        })}/>
      </FormsRow>

      <FormsRow label='Discount' error={errors?.discount?.message}>
        <Input disabled={isCreating} type="number" id="discount" defaultValue={0} {...register('discount', {
          required: 'Field should not be empty',
          validate: (discountValue) => {console.log(discountValue); return Number(discountValue) <= Number(getValues().regularPrice) || 'Discount should be less then price'}
        })}/>
      </FormsRow>

      <FormsRow label='Description for website' error={errors?.description?.message}>
        <Textarea disabled={isCreating} type="number" id="description" defaultValue="" {...register('description', {
          required: 'Field should not be empty',
        })}/>
      </FormsRow>

      <FormsRow label='Cabin photo'>
        <FileInput
          disabled={isCreating}
          id="image"
          type="file"
          accept="image/*"
          {...register('image', {required: 'Photo is required'})}
        />
      </FormsRow>

      <FormsRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" size='medium' type="reset">
          Cancel
        </Button>
        <Button variation='primary' size='medium' disabled={isCreating}>Add cabin</Button>
      </FormsRow>
    </Form>
  );
}

export default CreateCabinForm;
