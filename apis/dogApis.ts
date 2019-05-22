import axios from 'axios'

export const getRandomDogImagePath = () => {
  return axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
    return response.data.message
  })
}
