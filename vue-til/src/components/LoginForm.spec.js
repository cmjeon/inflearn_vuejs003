import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'notEmailUsername',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    console.log(warningText);
    expect(warningText.exists()).toBeTruthy();
  });
});
