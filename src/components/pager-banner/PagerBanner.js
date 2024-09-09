import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { DefaultButton } from '../buttons/DefaultButton';
import { SocialRegisterList } from '../social-register/SocialRegisterList';
import EventBus from 'react-native-event-bus'

export default function PagerBanner({...props}) {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 225 / 333);
    const imageWidth = dimensions.width;

    const handleRegister = () => {
      EventBus.getInstance().fireEvent("open-register-modal")
    }
  return (
    <View style={styles.container}>
        <PagerView style={styles.container} initialPage={0}>
            <View style={styles.banner} key="1">
                <View style={[styles.bannerInfo, {height: imageHeight, width: imageWidth}]}>
                    <View style={styles.bannerInfoTop}>
                    </View>
                    <View style={styles.bannerInfoBottom}>
                        <View style={styles.bannerInfoSocial}>
                            <SocialRegisterList/>
                        </View>
                        <View style={styles.bannerInfoButton}>
                            <DefaultButton size='md' onPress={handleRegister}>
                                <Text style={styles.bannerButtonText}>Register</Text>
                            </DefaultButton>
                        </View>
                    </View>
                </View>
                <Image style={[styles.bannerImage, {height: imageHeight, width: imageWidth}]} source={require('./assets/Slide.png')}/>
            </View>
            <View style={styles.banner} key="2">
                <View style={[styles.bannerInfo, {height: imageHeight, width: imageWidth}]}>
                    <View style={styles.bannerInfoTop}>
                    </View>
                    <View style={styles.bannerInfoBottom}>
                        <View style={styles.bannerInfoButton}>
                            <DefaultButton size='md'>
                                <Text style={styles.bannerButtonText}>Play Now</Text>
                            </DefaultButton>
                        </View>
                    </View>
                </View>
                <Image style={[styles.bannerImage, {height: imageHeight, width: imageWidth}]} source={require('./assets/Slide_2.png')}/>
            </View>
        </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 333/225,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    position: 'relative'
  },
  bannerInfoSocial: {
    paddingVertical: 8,
  },
  bannerInfoButton: {
    shadowColor: "#2AA15E",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8.84,
    
    elevation: 5,
  },
  bannerInfoTop: {
    alignItems: 'flex-start'
  },
  bannerInfoBottom: {
    alignItems: 'flex-start'
  },
  bannerButtonText: {
    fontFamily: 'MontserratBold',
    color: '#FFFFFF',
    fontSize: 12,
  },
  bannerInfo: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  bannerTitle: {
    fontFamily: 'MontserratBold',
    color: '#FFFFFF53',
    fontSize: 10,
  },
  bannerSubTitle: {
    fontFamily: 'MontserratBold',
    color: '#FFFFFF',
    fontSize: 32,
  }
});