import { View, Text,TextInput,Image} from 'react-native'

import { FONTS,assets,COLORS,SIZES,SHADOWS } from '../constants'

const FocusedStatusBar = ({handleChange}) => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}>
      <View style={{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',

      }}>
        <Image source={assets.logo} resizeMode='contain' style={{
          width:100,height:30
        }}/>

        <View style={{width:45,height:45}}>
          <Image source={assets.person01} resizeMode='contain' style={{
            width:'100%',
            height:'100%'
            }}/>

          <Image source={assets.badge} resizeMode='contain' style={{
            position:'absolute',
            bottom:-4,
            right:0,
            height:20,width:20,
            }}/>
        </View>

      </View>

      <View style={{marginTop:SIZES.font}}>
            <Text style={{
              fontFamily:FONTS.regular,
              color:COLORS.white,
              fontSize:SIZES.small
              }}>
              Hello!! Rv 👋
            </Text>

            <Text style={{
              fontFamily:FONTS.bold,
              color:COLORS.white,
              fontSize:SIZES.large,
              marginTop:SIZES.base/2,
              }}>
              Let's Find A Masterpiece
            </Text>
      </View>
            
      <View style={{marginTop:SIZES.font}}>
        <View style={{
          width:'100%',
          padding:SIZES.base,
          backgroundColor:COLORS.gray,
          flexDirection:'row',
          alignItems:'center',
          borderRadius:SIZES.large,

        }}>
          <Image source={assets.search} resizeMode='contain' style={{
            width:20,height:20,
          }}/>

          <TextInput style={{
            flex:1,
            marginHorizontal:10

            }}

            onChangeText={handleChange}

            placeholder='Search A NFT...'/>
        </View>
      </View>
      
        
    </View>
  )
}

export default FocusedStatusBar