import React from 'react'
import {render} from '@testing-library/react-native'
import FollowersList from '../index'
import { getMockProfile } from '../../../screens/app/data/mocks/UserData'

const createTestProps = (propsData: Object) => ({
    ...propsData
  })
describe('Screen: FollowersList', () => {
    it('FollowersList: renders correctly', () => {
        const props: any = createTestProps({
          users: getMockProfile('John Doe').followers,
          onItemClick: jest.fn(),
          header: 'Header'
        })
        const {toJSON} = render(<FollowersList {...props} />)
        expect(toJSON()).toMatchSnapshot();
    })
})