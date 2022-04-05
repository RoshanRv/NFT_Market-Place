import { View, Text } from 'react-native'
import React,{useState} from 'react'

import { ETHPrice,NftTitle } from './SubInfo'
import { COLORS,SIZES,FONTS } from '../constants'

const DetailsDesc = ({data}) => {

  const [text,setText]=useState(data.description.slice(0,150))
  const [showMore,setShowMore]=useState(false)

  return (
    <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        }}>
        <NftTitle title={data.name}
        subtitle={data.creator}
        titleSize={SIZES.extraLarge}
        subtitleSize={SIZES.font}/>

        <ETHPrice data={data.price} />
      </View>
      <View style={{marginVertical:SIZES.extraLarge}}>
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
        }}>Description</Text>
        <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.small ,
          marginTop:SIZES.small,
          color:COLORS.secondary,
          lineHeight:SIZES.large
        }}>{text}
        
        {!showMore&& '...' } 

        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.small,
          color:COLORS.primary
        }}
        onPress={()=>{
          if(!showMore){
            setText(data.description)
            setShowMore(true)
          }else{
            setText(data.description.slice(0,150))
            setShowMore(false)
          }
        }}
        >{!showMore?' Read More':' Show Less'}</Text>

        </Text>
        
      </View>
      
    </View>
  )
}

export default DetailsDesc