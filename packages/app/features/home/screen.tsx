import { Anchor, Button, H1, Paragraph, Separator, Sheet, useToastController, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import {
	SigmaContainer,
	useRegisterEvents,
	useLoadGraph,
	useSigmaContext,
  } from "@react-sigma/core";

export function HomeScreen() {
	const linkProps = useLink({
		href: '/user/nate',
	})

	return (
		<YStack f={1} jc="center" ai="center" p="$4" space>
			<YStack space="$4" maw={600}>
				<H1 ta="center">welcome to clout.fyi</H1>
				<Paragraph ta="center">
					this is where the accloutant lives. more soon!
				</Paragraph>

			</YStack>
		</YStack>
	)
}

function SheetDemo() {
	const [open, setOpen] = useState(false)
	const [position, setPosition] = useState(0)
	const toast = useToastController()

	return (
		<>
			<Button size="$6" icon={open ? ChevronDown : ChevronUp} circular onPress={() => setOpen((x) => !x)} />
			<Sheet modal open={open} onOpenChange={setOpen} snapPoints={[80]} position={position} onPositionChange={setPosition} dismissOnSnapToBottom>
				<Sheet.Overlay />
				<Sheet.Frame ai="center" jc="center">
					<Sheet.Handle />
					<Button
						size="$6"
						circular
						icon={ChevronDown}
						onPress={() => {
							setOpen(false)
							toast.show('Sheet closed!', {
								message: 'Just showing how toast works...',
							})
						}}
					/>
				</Sheet.Frame>
			</Sheet>
		</>
	)
}
