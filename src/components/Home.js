import React from 'react';
import {View, Text} from 'react-native';
import {GetAnimeData} from '../services/API';
import {useAnimeStore} from '../services/API';

const Home = () => {
  GetAnimeData();

  const anime = useAnimeStore(state => state.anime);
  console.log(anime);

  return (
    <>
      <View>
        <Text>This is Home screen</Text>
      </View>
    </>
  );
};

export default Home;
