import React from 'react'
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

                const dotsWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [6, 16, 6],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                })

                return (
                    <Animated.View
                        style={[styles.dot, { width: dotsWidth, opacity }]}
                        key={i.toString()}
                    />
                )
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 6,
        borderRadius: 10,
        backgroundColor: '#4BCCED',
        marginHorizontal: 10,
    },
})
