import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, View, Image, Pressable, Alert,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from '@rneui/themed';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './style';




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

/// PRIMEIROS ARRAYS FORAM DE OBJETOS, PQ GUARDAM OUTRAS INFORMACOES JUNTO DA IMAGEM
// O TERCEIRO TO FAZENDO SO C IMG

// USAR REQUIRE pra imagens dentro do projeto , e URI quando for pegar de algum lugar online, tipo API e tals 
// ESSE TRECHO FAREI C REQUIRE APENAS, SEM OBJETO, APENAS CAMINHO DA IMG. 


const carroselTres = [
  require('./assets/TerceiroCarrosel1.jpeg'),
  require('./assets/TerceiroCarrosel2.jpeg'),
  require('./assets/TerceiroCarrosel3.jpeg'),
  require('./assets/TerceiroCarrosel4.jpeg'),
  ] ; 

  

export default function App() {
  return (
    <ScrollView>

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
      <View style={styles.wrapperCarrosselOne}>
        <Carousel 
          loop
          width={500}
          height={120}
          autoPlay={true}
          data={imagensCarrossel}
          scrollAnimationDuration={1000}
          style={styles.estiloCarrossel}
          renderItem={({ item }) => (
            <View style={styles.individualPrimeiroCarrosel}>
              <Image
                source={item.uri}
                style={styles. imagemApenasPrimeiroCarrosel}
                resizeMode='cover'
                
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

      <View style={styles.wrapperCarrosselOne}>
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
                style={styles.imagemCarrosselDois}
                resizeMode='contain'
              />
            </View>
          )}
        />
      </View>


     <View>
      <View style={{ backgroundColor: '#c0c0c0', width: '100%', height: 17 }} />
     </View>

     <View style={styles.viewCombine}>
      <Image 
         source={require('./assets/foto.combine.png')}
          style={styles.imageCombine}
          resizeMode="contain"
      />

      <Text style={styles.textoTerceiroCarrosel} >
            Combine & Economize

      </Text>

</View>

  <View style={styles.wrapperCarrossel}>
  <Carousel
    loop={true}
    width={420}
    height={200}
    autoPlay={true}
    data={carroselTres}
    scrollAnimationDuration={1000}
    style={styles.estiloDoTerceiroCarrosel}
    renderItem={({ item }) => (
      <View style={styles.itemCarrossel}>
        <Image
          source={item}
          style={styles.imagemCarrossel}
          resizeMode="contain"
        />
      </View>
      
    )}
  />
  
  

  {/* IMAGEM FORA DO CARROSSEL */}
  <Image
    source={require('./assets/quartaViewFreteEntrega.jpg')}
    style={{ width: 400, height: 220, resizeMode: 'contain', marginTop: -120 }}
  />
</View>

   

    </View>
    

 




     </ScrollView>
    
  );
}



