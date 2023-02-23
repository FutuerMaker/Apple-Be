import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Images from '';

const COLORS = {primary: "#282534", orange:"#ff8000", white:"#ffff"}
const {width, height} = Dimensions.get("window");

const slides=[
    {
      id: "1", 
      title:"", 
      image: require("../../assets/images/signup_onboarding.jpg") },
    {id: "2", title:"Order your drink", image: require("../../assets/images/order_beer_onboarding.jpg") },
    {id: "3", title:"& Enjoy", image: require("../../assets/images/enjoy_onboarding.jpg") },
]

const Slide = ({item}) => {
  return (
    <View style={{alignItems: "center"}} >
      <Image source={item.image} style={{height: "75%", width, resizeMode: "contain",}} />
      <Text style={{color: COLORS.white, fontSize:30, fontWeight:'bold', marginTop:20, textAlign: 'center'}} >{item.title}</Text>
    </View>
  )
}

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const Footer=()=>{
    return(
      <View style={{height: height*0.25, justifyContent:'space-between', paddingHorizontal:20}} >
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
          {slides.map((_, index)=>(
            <View key={index} style={[styles.indicator, currentSlideIndex == index && {
              backgroundColor:COLORS.white,
              width: 25,

            }]} />
          ))}
        </View>
        <View style={{marginBottom: 20}} >
            {              
            
              currentSlideIndex == slides.length - 1 ?
            (
              <View style={{height: 120}} >
              <TouchableOpacity style={[styles.btn,{backgroundColor: COLORS.orange, borderWidth: 1, borderColor: COLORS.orange}]} onPress={()=>navigation.navigate("SignUp")} >
                <Text style={{fontWeight: 'bold', fontSize: 18, color:COLORS.white}} >Get Started</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={[styles.btn,{backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.white}]} onPress={()=>navigation.navigate("Login")} >
                <Text style={{fontWeight: 'bold', fontSize: 18, color:COLORS.orange}} >Login</Text>
              </TouchableOpacity>
            </View>
            ) : (
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity style={[styles.btn,{backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white}]} onPress={skip} >
                <Text style={{fontWeight: 'bold', fontSize: 18, color:COLORS.white}} >Skip</Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide} >
                <Text style={{fontWeight: 'bold', fontSize: 18}} >Next</Text>
              </TouchableOpacity>
            </View>
            )}
        </View>
      </View>
    )
  }
  
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  }

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1
    if(nextSlideIndex != slides.length)
    {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex) 
    }
  }
  
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  }

  return( 
  <SafeAreaView style={styles.area} >
    <StatusBar backgroundColor={COLORS.primary} />
    <FlatList 
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      pagingEnabled
      data={slides}
      contentContainerStyle={styles.flatlist}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=> <Slide item={item}/>}

    />
    <Footer/>
  </SafeAreaView>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  area:{
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  flatlist: {
    height: height*0.7
  },
    indicator: {
      height: 2.5,
      width: 10,
      backgroundColor: 'grey',
      marginHorizontal: 3,
      borderRadius: 2,
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center'
    },
});
