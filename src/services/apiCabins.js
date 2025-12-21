import supabase, { supabaseUrl } from './spabase'

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.eror(error)
    throw new Error('Casbins are not loaded')
  }

  return data
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be deleted')
  }

  return data
}

export async function createEditCabin(newCabin, id) {

  const hasImage = newCabin.image?.startsWith?.(supabaseUrl)
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace('/', '')
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1. Create / edit cabin

  // A. Crereate
  let query = supabase.from('cabins')
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }])

  // B. Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id)

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error.message)
    throw new Error('Cabin could not be createed')
  }

  // 2. Upload file
  if (hasImage) return data

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

  // 3. Delete cabin if trere was an error uploading
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error('Image could not be uploaded')
  }

  return data
}
