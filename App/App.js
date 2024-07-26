import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View, Image } from 'react-native';

const Menu = [
  {
    id: 1,
    title: "Yemekler",
    data: [
      {
        id: 1,
        title: "Adana Kebap",
        image: require('./assets/Adana-Kebap-Porsiyon.jpg')
      },
      {
        id: 2,
        title: "Ciğer",
        image: require('./assets/ciger.jpg')
      },
      {
        id: 3,
        title: "Tavuk Şiş",
        image: require('./assets/tavuk.jpg')
      }
    ]
  },
  {
    id: 2,
    title: "Tatlılar",
    data: [
      {
        id: 1,
        title: "Baklava",
        image: require('./assets/baklava.jpg')
      },
      {
        id: 2,
        title: "Sütlaç",
        image: require('./assets/sütlaç.jpg')
      },
      {
        id: 3,
        title: "Künefe",
        image: require('./assets/künefe.jpg')
      }
    ]
  },
  {
    id: 3,
    title: "İçecekler",
    data: [
      {
        id: 1,
        title: "Kola",
        image: require('./assets/Kola.jpg')
      },
      {
        id: 2,
        title: "Fanta",
        image: require('./assets/fanta.jpg')
      },
      {
        id: 3,
        title: "Gazoz",
        image: require('./assets/gazoz.jpg')
      }
    ]
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{marginBottom:20}}/>
      <Text style={{color:"navy",fontWeight:"bold",fontSize:35}}>Veli Şef</Text>
      <Text style={{color:"navy",fontWeight:'bold',fontSize:15,fontStyle:"italic"}}>Kebap ve Lahmacun Salonu</Text>
      <SectionList style={{width: "90%"}}
        sections={Menu}  //Verinin alınacağı yer yani menu'yu beliritir
        keyExtractor={(item) =>item.id} //SectionList bileşeninde öğeleri benzersiz bir şekilde tanımlamak ve performansı artırmak için anahtar gereklidir. 
        renderItem={({item}) => <Item name={item.title} image={item.image}/>} //renderItem fonksiyonu, SectionList bileşenine her bir öğeyi nasıl görüntüleyeceğini söyler.
        renderSectionHeader={({section}) => <Title name={section.title}/>} // Her bölüm başlığını nasıl render edeceğinizi belirler.
      />
       <Text style={{fontWeight:'bold',fontSize:15,color:"navy"}}>Designed By</Text>
       <Text style={{fontStyle:"italic",color:"navy"}}>Notorious</Text>

    </View>
    
  );
}

const Title = ({name}) => {
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', width: "90%", textAlign: "left",color:"#000080"}}>
      {name}
    </Text>
  )
}

const Item = ({name, image}) => {
  return (
    <View style={{width: "90%",  borderRadius: 15, paddingLeft: 10, justifyContent: "center", marginBottom: 10,alignItems:"center"}}>
      <Text style={{fontSize: 20, color: "#000080"}}>{name}</Text>
      <Image source={image} style={{width: "100%", height: 100, marginTop: 5, borderRadius: 10}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#faf0e6",
  },
});

