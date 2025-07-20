import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
  estiloCarrossel: {
    marginTop: 1,
  },
  itemCarrossel: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '130%',
    width: '110%',
    padding: 0,
    
  },
  imagemCarrossel: {
    width: '60%',
    height: '60%',
    marginTop: 1,
  },
  textoTerceiroCarrosel: {
    fontWeight: '500',
    fontSize: 22,
    fontFamily: 'Georgia',
    marginRight: 70,
  },
  imageCombine: {
    height: 50,
    marginRight: 0,
  },
  viewCombine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  estiloDoTerceiroCarrosel: {
    marginTop: 0,
  },
  ReferenteViewDofrete: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFreteEntrega: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  individualPrimeiroCarrosel: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imagemApenasPrimeiroCarrosel: {
    width: 200,
    height: 120,
    borderRadius: 29,
  },
  imagemCarrosselDois: {
    width: '80%',
    height: '83%',
    marginTop: 2,
  },
  wrapperCarrosselOne: {
    marginTop: 2,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
