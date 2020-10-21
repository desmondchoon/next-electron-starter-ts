import {observable} from 'mobx'

class ExampleStore {
  @observable test = "mobx works";
}

export default ExampleStore