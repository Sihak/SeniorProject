import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = wp(47);
const slideWidth = wp(100);
const itemHorizontalMargin = wp();

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * .5;

const entryBorderRadius = 0;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.slideBackground,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    imageContainerEven: {
        backgroundColor: colors.slideBackground
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on ios; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: colors.slideBackground
    },
    radiusMaskEven: {
        backgroundColor: colors.slideBackground
    },
    textContainer: {
        justifyContent: 'center',
        // paddingTop: 10 - entryBorderRadius,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        alignItems:'center',
        backgroundColor: '#333'
    },
    textContainerEven: {
        backgroundColor:'#333'
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 0.5
    },
    titleEven: {
        color: '#fff'
    },
    subtitle: {
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});