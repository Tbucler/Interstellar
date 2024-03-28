let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects. If you do not do so, The teacher will be able to see your screen and the link will get blocked much faster. Dont know how to? Join the discord! discord.gg/dyS58Zxhfj')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('name') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://google.com/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (window.localStorage.getItem('v4Particles') === 'true') {
    const scr = document.createElement('script')
    scr.src = '/assets/scripts/particles.js'
    document.body.appendChild(scr)
  }
})

let splashtext = [
  'Want the tab to look more educational? Go to settings and change the Tab Cloaking options!',
  'Ads annoying you? Go to settings and turn off Advertisements!',
  'Having trouble or need support? Join the discord! discord.gg/dyS58Zxhfj',
  'Phone Number: 978-891-7967 Message or Call me for questions!',
  'Want to add more tips to here? Join the discord! discord.gg/dyS58Zxhfj',
  'Created by Kayden Snowden',
  'Co-Created by Connor',
  'Created with the help of our development team: Kira, Noah, Alex, Adam, and Axel.',
]

document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)]
