import type { Meta, StoryObj } from "@storybook/react"
import Button from "@kyper/components/Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Sample"
  }
}
