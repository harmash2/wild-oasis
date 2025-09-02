import Form from '../../ui/Form';
import FormsRow from '../../ui/FormsRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Spinner from '../../ui/Spinner';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {isLoading, settings} = useSettings();
  const { breakfastPrice, maxBookingLength, maxGuestsPerBooking, minBookingLength} = settings ?? {};
  const {isUpdating, updateSetting} = useUpdateSetting();

  function handleUpdate(e, nameField){
    const {value} = e.target;
    if(!value) return;

    updateSetting({[nameField]: value})
  }

  if (isLoading) return <Spinner/>

  return (
    <Form>
      <FormsRow label='Minimum nights/booking'>
        <Input type='number'
          id='min-nights'
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormsRow>

      <FormsRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights'
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
          defaultValue={maxBookingLength}/>
      </FormsRow>

      <FormsRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests'
          onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
          defaultValue={maxGuestsPerBooking}/>
      </FormsRow>

      <FormsRow label='Breakfast price'>
        <Input type='number' id='breakfast-price'
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
          defaultValue={breakfastPrice}/>
      </FormsRow>
    </Form>
  );
}

export default UpdateSettingsForm;
