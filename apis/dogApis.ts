import axios from 'axios'

export function getRandomDogImagePath(): Promise<any>{
  return axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
    return {newPath: response.data.message}
  })
}

// export const getRandomDogImagePath = () => {
//   return axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
//     return response.data.message
//   })
// }
