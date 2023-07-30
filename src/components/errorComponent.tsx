import { createStyles, Group, Text } from "@mantine/core"

const useStyles = createStyles({
  errorTextWrapper: {
    height: '80vh'
  },
  errorText: {
    fontSize: '24px'
  }
})

export const ErrorComponent = () => {
  const { classes } = useStyles();

  return (
    <Group position='center' align='center' className={classes.errorTextWrapper}>
      <Text weight={700} size='xl' color='#ccc' className={classes.errorText}>
        The server is not responding, try again later.
      </Text>
    </Group>
  )
}
