import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styled } from 'tamagui'

export function Leaderboard({}) {
	return (
		<LeaderboardContainer>
			<Text>Leaderboard</Text>
		</LeaderboardContainer>
	)
}

const LeaderboardContainer = styled(View, {
	flex: 1,
})

export default Leaderboard
