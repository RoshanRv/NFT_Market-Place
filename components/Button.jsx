import { Image, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { COLORS,SIZES,FONTS,SHADOWS} from '../constants'

export const CircleButton = ({imgUrl,handlePress,...props})=> {
  return (
    <TouchableOpacity style={{
        height:40,
        width:40,
        backgroundColor:COLORS.white,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
    }}
    onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode='contain' style={{height:24,width:24}}/>
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth,handlePress,fontSize,...props})=> {
  return (
    <TouchableOpacity style={{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.extraLarge,
        padding:SIZES.small,
        minWidth:minWidth,
        ...props
    }}
    onPress={handlePress}>
      <Text style={{
          color:COLORS.white,
          textAlign:'center',
          fontFamily:FONTS.semiBold,
          fontSize:fontSize,
          
          }}>Place a Bid</Text>
    </TouchableOpacity>
  )
}