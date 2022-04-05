import { View, Text,Image} from 'react-native'
import { COLORS,SIZES,FONTS,SHADOWS,assets} from '../constants'

export const SubInfo = ({data}) => {
  
  return (
    <View style={{
        marginTop:-SIZES.extraLarge,
        width:'100%',
        paddingHorizontal:SIZES.font,
        flexDirection:'row',
        justifyContent:'space-between'
    }}>
      <People data={data}/>
      <EndDate />
    </View>
  )
}

export const NftTitle = ({title,subtitle,titleSize,subtitleSize}) => {
  return (
    <View>
      <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:titleSize
        }}>{title}</Text>
      <Text style={{
          fontFamily:FONTS.regular,
          fontSize:subtitleSize
        }}>{subtitle}</Text>
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
        backgroundColor:COLORS.white,
        maxWidth:'50%',
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        alignItems:'center',
        justifyContent:'center',
        elevation:1,
        ...SHADOWS.medium,
    }}>
      <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.small,
          color:COLORS.primary
      }} >Ends In
      </Text>

      <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
          color:COLORS.primary
      }} >{(Math.floor(Math.random()*11))+2} hrs
      </Text>
    </View>
  )
}

export const ImgCmp = ({imgUrl,index}) => {
  return (
    <Image source={imgUrl} style={{
        width:60,
        height:60,
        marginLeft:index===0?0:-SIZES.extraLarge

    }}/>
  )
}

export const ETHPrice = ({data}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={assets.eth} style={{
            width:20,
            height:20,
            marginRight:2
        }}/>
        <Text style={{fontFamily:FONTS.medium,fontSize:FONTS.font}}>{data}</Text>
    </View>
  )
}

export const People = ({data}) => {
  return (
    <View style={{flexDirection:'row'}}>
      {data.map((imgUrl,i)=><ImgCmp index={i} imgUrl={imgUrl.image} key={`People-${i}`} />)}
    </View>
  )
}
