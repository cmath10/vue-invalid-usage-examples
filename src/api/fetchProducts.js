import id from '@/utils/id'
import { clone } from '@/utils/json'

import PHOTO_MOUSE_LOGITECH_M100_BLACK from '@/assets/mouse-logitech-m100-black.png'
import PHOTO_MOUSE_LOGITECH_M100_WHITE from '@/assets/mouse-logitech-m100-white.png'
import PHOTO_KEYBOARD_LOGITECH_K380_BLACK from '@/assets/keyboard-logitech-k380-black.png'
import PHOTO_KEYBOARD_LOGITECH_K380_WHITE from '@/assets/keyboard-logitech-k380-white.png'

const preset = [{
  id: id('product'),
  name: 'Мышь Logitech M100',
  offers: [{
    id: id('offer'),
    name: 'Мышь Logitech M100 Белая',
    photo: PHOTO_MOUSE_LOGITECH_M100_WHITE,
    price: [699, '₽'],
  }, {
    id: id('offer'),
    name: 'Мышь Logitech M100 Черная',
    photo: PHOTO_MOUSE_LOGITECH_M100_BLACK,
    price: [699, '₽'],
  }],
}, {
  id: id('product'),
  name: 'Клавиатура беспроводная Logitech K380',
  offers: [{
    id: id('offer'),
    name: 'Клавиатура беспроводная Logitech K380 Белая',
    photo: PHOTO_KEYBOARD_LOGITECH_K380_BLACK,
    price: [3499, '₽'],
  }, {
    id: id('offer'),
    name: 'Клавиатура беспроводная Logitech K380 Черная',
    photo: PHOTO_KEYBOARD_LOGITECH_K380_WHITE,
    price: [3499, '₽'],
  }],
}]

export default () => Promise.resolve(clone(preset))
