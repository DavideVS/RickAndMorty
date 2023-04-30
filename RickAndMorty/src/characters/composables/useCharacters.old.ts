import rickAndMorty from "@/api/rickAndMorty";
import { onMounted, ref } from "vue";
import type { Characters, Result } from "@/characters/interfaces/characters";
import axios from 'axios';

const characters = ref<Result[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharactersOld = () => {

    onMounted( async() => {
        await loadCharacters();
    });

    const loadCharacters = async() => {

        if (characters.value.length > 0 ) return; 

    isLoading.value = true;

    try {

        const { data } = await rickAndMorty.get<Characters>('/character');
        characters.value = data.results;
        isLoading.value = false;
        
    } catch (error) {
        
        hasError.value = true;
        isLoading.value = false;

        if (axios.isAxiosError(error)) {
            errorMessage.value = error.message;
            return;
        }

        errorMessage.value = JSON.stringify(error);
    }

    }

    return {
        characters,
        isLoading,
        hasError,
        errorMessage
    }
}