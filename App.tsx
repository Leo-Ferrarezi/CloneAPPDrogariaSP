import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from '@rneui/themed';
import Carousel from 'react-native-reanimated-carousel';

// array de objetos 1 carrosel
const imagensCarrossel = [
  { id: 1, uri: require('./assets/Genericos.logo.png') },
  { id: 2, uri: require('./assets/revista.jpg') },
  { id: 3, uri: require('./assets/semble.png') },
  { id: 4, uri: require('./assets/promocao.logo.png') },
];

// array do carrossel 2
const carroselDois = [
  { id: 1, uri: require('./assets/Foto1Carrosel.jpg') },
  { id: 2, uri: require('./assets/Foto2Carrosel.jpg') },
  { id: 3, uri: require('./assets/Foto3Carrosel.jpg') },
  { id: 4, uri: require('./assets/Foto4Carrosel.jpg') },
  { id: 5, uri: require('./assets/foto5Carrosel.jpg') },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho} testID='cabecalho'>
        <Image 
          source={require('./assets/logo.principal.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.iconesCabecalho}>
          <Pressable onPress={() => Alert.alert('Função em desenvolvimento')}>
            <Text style={styles.textoCabecalho}>
              Entre ou cadastre-se
            </Text>
          </Pressable> 

          <Pressable 
            style={styles.containerIcones}
            onPress={() => Alert.alert('Em breve')}
          >
            <Icon name="bell" size={20} color="white" style={styles.icone} />
            <Icon name="shopping-basket" size={20} color="white" style={styles.icone} />
          </Pressable>
        </View>

        <View style={styles.containerBusca}>
          <SearchBar 
            placeholder="O que você está buscando?"
            platform="android"
            containerStyle={styles.barraBuscaContainer}
            inputContainerStyle={styles.inputBuscaContainer}
            inputStyle={{ color: 'black' }}
          />
        </View>
      </View>

      {/* Carrossel 1 */}
      <View style={styles.wrapperCarrossel}>
        <Carousel 
          loop
          width={500}
          height={160}
          autoPlay={true}
          data={imagensCarrossel}
          scrollAnimationDuration={1000}
          style={styles.estiloCarrossel}
          renderItem={({ item }) => (
            <View style={styles.itemCarrossel}>
              <Image
                source={item.uri}
                style={styles.imagemCarrossel}
                resizeMode='contain'
              />
            </View>
          )}
        />
      </View>

      {/* Linha separa apenas c a cor  */}
         {/* View vazia so c cor */}
      <View style={{ backgroundColor: '#c0c0c0', width: '100%', height: 17 }} />

      {/* Carrossel 2 */}
      {/* tenho q passar propriedades pro carrosel q ja existe */}

      <View style={styles.wrapperCarrossel}>
        <Carousel 
          width={500}
          height={160}
          autoPlay={true}
          data={carroselDois}
          scrollAnimationDuration={1000}
          style={styles.estiloCarrossel}
          renderItem={({ item }) => (
            <View style={styles.itemCarrossel}>
              <Image
                source={item.uri}
                style={styles.imagemCarrossel}
                resizeMode='contain'
              />
            </View>
          )}
        />
      </View>


     <View>
      <View style={{ backgroundColor: '#c0c0c0', width: '100%', height: 17 }} />
     </View>

     <View>

    <Text>Oiii </Text>
     </View>

    </View>
    
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cabecalho: {
    backgroundColor: '#282828',
    padding: 10,
  },
  iconesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerIcones: {
    flexDirection: 'row',
    gap: 15,
  },
  icone: {
    marginLeft: 10,
  },
  logo: {
    width: 70,
    height: 50,
    alignSelf: 'auto',
    marginTop: 10,
  },
  textoCabecalho: {
    color: 'white',
    fontSize: 14,
  },
  containerBusca: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 10,
  },
  barraBuscaContainer: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
  },
  inputBuscaContainer: {
    backgroundColor: 'white',
    height: 40,
  },
  wrapperCarrossel: {
    marginTop: 2,
    marginBottom: 20,
  },
  estiloCarrossel: {
    marginTop: 12,
  },
  itemCarrossel: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 5,
    borderColor: 'black',
  },
  imagemCarrossel: {
    width: '60%',
    height: '60%',
    marginTop: 1,
  },
});
