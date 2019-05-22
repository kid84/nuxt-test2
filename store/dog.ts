import { getRandomDogImagePath } from "../apis/dogApis"

interface Hoge {
  name: string;
  id: number;
  params: object;
}

export const state = () => ({
  dogImagePath: 'https://images.dog.ceo/breeds/schipperke/n02104365_2031.jpg',
  dogPageTitle: "THIS IS DOG PAGE"
})

export const mutations = {
  changeDogImagePath(state: object, newPath: string){
    state.dogImagePath = newPath;
  }
}

export const actions = {
  async fetchDogImagePath({commit}){
    const imagePath: string = await getRandomDogImagePath();
    commit("changeDogImagePath", imagePath);
  }
}
