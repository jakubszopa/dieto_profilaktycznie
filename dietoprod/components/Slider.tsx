import {Flex} from '@sanity/ui'
import {set} from 'sanity'

export const Slider = (props: any) => {
  const {schemaType, onChange, value = 0} = props
  const {options} = schemaType

  return (
    <Flex>
      <input
        type="range"
        min={options.min}
        max={options.max}
        step={options.step}
        onChange={(e) => {
          onChange(set(parseInt(e.target.value)))
        }}
        value={value}
        style={{width: '90%'}}
      />
      <p>{value}</p>
    </Flex>
  )
}
