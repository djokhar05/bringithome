import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeInView = ({ children }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current // Initial value
    
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{opacity: fadeAnim}}>
            {children}
        </Animated.View>
    )
}