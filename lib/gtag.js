export const GA_TRACKING_ID = 'UA-124416801-1' // Not too worried about having this exposed

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

export const logEvent= (param) => {
  const isServer = typeof window === 'undefined'

  if (!isServer) {
    event({
      action: 'click_link',
      category: 'Home',
      label: param
    })
  }
}
