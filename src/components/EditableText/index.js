import {Component} from 'react'
import {
  EditableTextContainer,
  FormContainer,
  Heading,
  Input,
  CustomButton,
  Para,
} from './styledComponents'

class EditableText extends Component {
  state = {isSaved: false, inputValue: ''}

  onToggleSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {isSaved, inputValue} = this.state
    return (
      <EditableTextContainer>
        <FormContainer>
          <Heading>Editable Text Input</Heading>
          {isSaved ? (
            <Para>{inputValue}</Para>
          ) : (
            <Input value={inputValue} onChange={this.onChangeInput} />
          )}

          <CustomButton type="button" onClick={this.onToggleSave}>
            {isSaved ? 'Edit' : 'Save'}
          </CustomButton>
        </FormContainer>
      </EditableTextContainer>
    )
  }
}
export default EditableText
