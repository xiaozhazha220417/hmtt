import request from '@/utils/request'

/**
 * 获取手机验证码
 * @param {number} mobile
 * @returns promise
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `sms/codes/${mobile}`
  })
}

/**
 * 登录
 * @param {mobile, code} param0
 * @returns promise
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: '/authorizations',
    data: {
      mobile, code
    }
  })
}
