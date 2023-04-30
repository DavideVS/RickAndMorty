import rickAndMorty from '@/api/rickAndMorty';
import type { Characters, Result } from '@/characters/interfaces/characters';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue';


const characters = ref<Result[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacters = async(): Promise<Result[]> => {

    if (characters.value.length > 0 ) {
        return characters.value;
    }

    const { data } = await rickAndMorty.get<Characters>('/character');

    return data.results;
}

const loadedCharacters = (data: Result[]) => {
    hasError.value = false;
    errorMessage.value = null;
    characters.value = data;
}

const useCharacters = () => {

    const { isLoading } = useQuery(
        ['characters'],
        getCharacters,
        {
            onSuccess: loadedCharacters
        }
    );

    return {
        characters,
        isLoading,
        hasError,
        errorMessage,
        count: computed (() =>  characters.value.length )
    }
}

export default useCharacters