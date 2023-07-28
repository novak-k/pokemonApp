import { Badge, Box, rem } from "@mantine/core";
import {
  IconActivity, IconBiohazard, IconLeaf, IconFlame, IconButterfly,
  IconDroplet, IconBug, IconBolt, IconWorld, IconWand, IconKarate, IconBrandSupernova,
  IconHandRock, IconWreckingBall, IconBox, IconGhost2, IconAlien, IconMoonFilled
} from "@tabler/icons-react";
import { FC } from "react";

const mapping = {
  normal: {
    color: 'green',
    style: { boxShadow: "2px 5px 10px 3px rgb(21 197 14 / 30%)" },
    icon: <IconActivity size={rem(15)} />
  },
  poison: {
    color: 'violet',
    style: { boxShadow: "2px 5px 10px 3px rgb(138 43 226 / 30%)" },
    icon: <IconBiohazard size={rem(15)} />
  },
  grass: {
    color: 'green',
    style: { boxShadow: "2px 5px 10px 3px rgb(21 197 14 / 30%)" },
    icon: <IconLeaf size={rem(15)} />
  },
  fire: {
    color: 'red',
    style: { boxShadow: "2px 5px 10px 3px rgb(255 0 0  / 30%)" },
    icon: <IconFlame size={rem(15)} />
  },
  flying: {
    color: 'blue',
    style: { boxShadow: "2px 5px 10px 3px rgb(0 0 255 / 30%)" },
    icon: <IconButterfly size={rem(15)} />
  },
  water: {
    color: 'blue',
    style: { boxShadow: "2px 5px 10px 3px rgb(0 0 255 / 30%)" },
    icon: <IconDroplet size={rem(15)} />
  },
  bug: {
    color: 'green',
    style: { boxShadow: "2px 5px 10px 3px rgb(21 197 14 / 30%)" },
    icon: <IconBug size={rem(15)} />
  },
  electric: {
    color: 'violet',
    style: { boxShadow: "2px 5px 10px 3px rgb(0 0 139 / 30%)" },
    icon: <IconBolt size={rem(15)} />
  },
  ground: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconWorld size={rem(15)} />
  },
  fairy: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconWand size={rem(15)} />
  },
  fighting: {
    color: 'red',
    style: { boxShadow: "2px 5px 10px 3px rgb(255 0 0  / 30%)" },
    icon: <IconKarate size={rem(15)} />
  },
  psychic: {
    color: 'violet',
    style: { boxShadow: "2px 5px 10px 3px rgb(138 43 226 / 30%)" },
    icon: <IconBrandSupernova size={rem(15)} />
  },
  rock: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconHandRock size={rem(15)} />
  },
  steel: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconWreckingBall size={rem(15)} />
  },
  ice: {
    color: 'blue',
    style: { boxShadow: "2px 5px 10px 3px rgb(0 0 255 / 30%)" },
    icon: <IconBox size={rem(15)} />
  },
  ghost: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconGhost2 size={rem(15)} />
  },
  dragon: {
    color: 'red',
    style: { boxShadow: "2px 5px 10px 3px rgb(255 0 0  / 30%)" },
    icon: <IconAlien size={rem(15)} />
  },
  dark: {
    color: 'gray',
    style: { boxShadow: "2px 5px 10px 3px rgb( 90 90 90 / 30%)" },
    icon: <IconMoonFilled size={rem(15)} />
  },
}

type Props = {
  type: IBadgeType,
  [key: string]: unknown,
}

export const BadgeFactory: FC<Props> = ({ type, ...rest }) => {

  return (
    <Badge
      {...rest}
      color={mapping[type].color}
      size="lg"
      radius="md"
      sx={mapping[type].style}
      rightSection={<Box mt={5}>{mapping[type].icon}</Box>}
    >{type.toUpperCase()}
    </Badge>
  )
}

export type IBadgeType = (keyof typeof mapping);
