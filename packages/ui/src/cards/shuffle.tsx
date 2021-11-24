import React, { useState } from 'react';
import ShuffleCard from './shuffle-card';
import ShuffleCardWeb from './shuffle-card-web';
import TheSpread from './the-spread';
import useInstructions from '../hooks/use-instructions';
import { CARDS } from './constants';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View
    } from 'react-native';
import { Percentage, Value } from '../theme/fonts';


const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleProps = {
    done: () => void;
    shuffleDeck: () => void;
    cutDeck: () => void;
    web: boolean;
};
const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch'
    },
    instructionWrapper: {
        flexBasis: 120,
        paddingHorizontal: 10
    },
    instructions: {
        fontSize: instructionTextSize,
        textAlign: 'center',
        marginTop: 20
    },

    deck: {
        alignSelf: 'center',
        padding: 40,
        width: viewWidth,
        height: viewHeight,
        position: 'relative'
    }
});

export default function Shuffle({ done, cutDeck, shuffleDeck, web = false }) {
    const [isShuffling, setIsShuffling] = useState(true);
    const [cutCount, setCutCount] = useState(0);
    const [cutCardIndex, setCutCardIndex] = useState(0);
    const { instruction, next } = useInstructions();

    const castEnergyToDeck = () => {
        setIsShuffling(false);
        next();
    };

    const cutCards = (cutCardIndex: number) => {
        cutDeck(cutCardIndex);
        setCutCardIndex(cutCardIndex);
        setCutCount(cutCount + 1);
        if (cutCount < 2) {
            setTimeout(() => {
                next();
                shuffleDeck();
                setIsShuffling(true);
            }, 800);
        } else {
            next();
            done();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.instructionWrapper}>
                <Text style={styles.instructions}>{instruction}</Text>
            </View>
            <TheSpread>
                {CARDS.map(index => {
                    return web ? (
                        <ShuffleCardWeb
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCards={cutCards}
                            cutCardIndex={cutCardIndex}
                            onPress={castEnergyToDeck}
                        />
                    ) : (
                        <ShuffleCard
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCards={cutCards}
                            cutCardIndex={cutCardIndex}
                            onPress={castEnergyToDeck}
                        />
                    );
                })}
            </TheSpread>
        </View>
    );
}
