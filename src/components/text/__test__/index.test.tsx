import React from 'react'
import {render} from '@testing-library/react-native'
import Text from '../index'

const createTestProps = (propsData: Object) => ({
    ...propsData
  })
describe('Screen: Text', () => {
    it('Text: renders correctly', () => {
        const props: any = createTestProps({
          testId: 'id',
          text: 'Text',
          style: {}
        })
        const {toJSON} = render(<Text {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})