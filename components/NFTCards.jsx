import { View, Text ,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS,SIZES,SHADOWS,assets } from '../constants'

import  {CircleButton,RectButton} from './Button'

import { SubInfo,ETHPrice,NftTitle} from './SubInfo'

const FocusedStatusBar = ({data}) => {

  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor:COLORS.white, 
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark
      }}>
        <View style={{
          width:'100%',
          height:250
          }}>
          <Image source={data.image} resizeMode="cover" style={{
            width:'100%',
            height:'100%',
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font}} />
          <CircleButton imgUrl={assets.heart} top={10} right={10}/>
        </View>
      <SubInfo data={data.bids}/>
      <View style={{padding:SIZES.font,width:'100%'}}>
        <NftTitle title={data.name} subtitle={data.creator} titleSize={SIZES.large} subtitleSize={SIZES.small}/>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginTop:SIZES.font,
          marginBottom:SIZES.base,
          }}>
            <ETHPrice data={data.price}/>
            <RectButton minWidth={120} handlePress={()=>navigation.navigate('Details',{data})}/>

        </View>

      </View>
    </View>
  )
}

export default FocusedStatusBar