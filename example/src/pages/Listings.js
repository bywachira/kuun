import React from 'react'
import { Listings } from 'kuun'
import { Link } from 'react-router-dom'

const ListingsComponents = () => {
  return (
    <Listings
      listings={[
        {
          header_logo:
            'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
          header_label: 'Sensei.Thrift',
          image:
            'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
          date: 'about 6 hours ago',
          listing_id: 'some-listing',
          name: 'Shirt 450 Vintage X',
          description: 'Deadstock from Sensei.Thrift',
          amount: 'KES. 5000'
        },
        {
          header_logo:
            'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
          header_label: 'Sensei.Thrift',
          image:
            'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
          date: 'about 6 hours ago',
          listing_id: 'some-listing',
          name: 'Shirt 450 Vintage X',
          description: 'Deadstock from Sensei.Thrift',
          amount: 'KES. 5000'
        },
        {
          header_logo:
            'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
          header_label: 'Sensei.Thrift',
          image:
            'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
          date: 'about 6 hours ago',
          listing_id: 'some-listing',
          name: 'Shirt 450 Vintage X',
          description: 'Deadstock from Sensei.Thrift',
          amount: 'KES. 5000'
        },
        {
          header_logo:
            'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
          header_label: 'Sensei.Thrift',
          image:
            'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
          date: 'about 6 hours ago',
          listing_id: 'some-listing',
          name: 'Shirt 450 Vintage X',
          description: 'Deadstock from Sensei.Thrift',
          amount: 'KES. 5000'
        },
        {
          header_logo:
            'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
          header_label: 'Sensei.Thrift',
          image:
            'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
          date: 'about 6 hours ago',
          listing_id: 'some-listing',
          name: 'Shirt 450 Vintage X',
          description: 'Deadstock from Sensei.Thrift',
          amount: 'KES. 5000'
        },
        {
            header_logo:
              'https://cms-assets.tutsplus.com/uploads/users/151/posts/33040/image/7-online-logo-maker-for-indie-clothing-brands-1316b.jpg',
            header_label: 'Sensei.Thrift',
            image:
              'https://media.gq.com/photos/5e558a420f37ed0008503793/master/w_1600%2Cc_limit/online-shopping-gq-march-2019-etsy.jpg',
            date: 'about 6 hours ago',
            listing_id: 'some-listing',
            name: 'Shirt 450 Vintage X',
            description: 'Deadstock from Sensei.Thrift',
            amount: 'KES. 5000'
          }
      ]}
      Link={Link}
      Action={() => <div>{'❤️'}</div>}
    />
  )
}

export default ListingsComponents
