import { getRandomDogImagePath } from "../apis/dogApis";
import {
  // DefineGetters,
  DefineMutations,
  DefineActions,
  // Dispatcher,
  // Committer
} from 'vuex-type-helper';

export const name = "dog";

/**
 * Declare module types
 */
export interface DogState {
  dogImagePath: string;
  dogPageTitle: string;
}

export interface DogMutations {
  changeDogImagePath: {
    newPath: string
  }
}

export interface DogActions {
  fetchDogImagePath: {}
}

/**
 * Implement the module
 */
export const state = (): DogState => ({
  dogImagePath: 'https://images.dog.ceo/breeds/schipperke/n02104365_2031.jpg',
  dogPageTitle: "THIS IS DOG PAGE"
});

export const mutations: DefineMutations<DogMutations, DogState> = {
  changeDogImagePath(state, {newPath}){
    state.dogImagePath = newPath;
  }
};

export const actions: DefineActions<DogActions, DogState, DogMutations> = {
  async fetchDogImagePath({commit}){
    const imagePath: string = await getRandomDogImagePath();
    commit("changeDogImagePath", imagePath);
  }
};
