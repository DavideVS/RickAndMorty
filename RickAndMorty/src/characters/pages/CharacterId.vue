<script setup lang="ts">
import { useRoute } from 'vue-router';
import characterStore from '@/store/characters.store';


const route = useRoute();

const { id } = route.params as { id: string};

const characterId: number = +id - 1;

const character = characterStore.characters.list[characterId];

console.log(character);

</script>

<template>
    <div>
    <h1 v-if="!character"> Loading... </h1>
    <div v-else>
        <h1> {{ character.name }} </h1>

        <div class="character-container">
          <img :src="character.image" :alt="character.name">
          <ul>
            <li>Estado: {{ character.status }}</li>
            <li>Especie: {{ character.species }}</li>
            <li>Tipo: {{ character.type }}</li>
            <li>Lugar: {{ character.location.name }}</li>
            <li>Genero: {{ character.gender }}</li>
            <div>
                <li>Episodios: {{ character.episode[0].split('/')[5]}}</li>
            </div>
          </ul>

        </div>
        <code>
            {{ character }}
        </code>

    </div>
    <!--
    <code>
      {{ character }}
    </code>
    -->
    </div>
</template>

<style scoped>

.character-container {
    display: flex;
    flex-direction: row;
    margin: 20px 10px;
}

img {
    width: 300px;
    border-radius: 5px;
}

ul {
    font-size: 20px;
}

</style>