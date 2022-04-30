import axios from 'axios'
import { ethers } from 'ethers'
import { useContext, useEffect, useState } from 'react'
import { TokenPriceContext } from '../contexts/TokenPriceContext'
import { getCurrencyFromAddressOrId } from '../utils/helper'


const  useItems = (props) => {
  const [items, setItems] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(new Map())
  const [hasMore, setHasMore] = useState(true)

  const { prices } = useContext(TokenPriceContext)

  const {sortBy, sortDir, page, search, perPage,auctionable ,isSold,buynow} = props



  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get('item', {
          params: {
            sortDir: sortDir || 'createdAt',
            sortBy: sortBy || 'desc',
            search: search || '',
            page: page || 0,
            limit: perPage || 24,
            auctionable : auctionable || false,
            isSold: isSold || false,
            buynow:buynow ||false
          },
        })

        const currentTimestamp = new Date().getTime()/1000

        let resItems = response?.data?.items
        if(resItems && resItems.length > 0){
          let tempItems = resItems.filter(item => item.endTime >= currentTimestamp || !item.auctionable)

          for(let i = 0; i < tempItems.length; i++) {
            const currency = getCurrencyFromAddressOrId(tempItems[i].currency);
            if(currency) {
              tempItems[i] = {
                ...tempItems[i],
                //winningBid: winningBid(tempItems[i].bids),
                currencyObj: {
                  ...currency,
                  usdPrice: prices[currency.id]?.usd || 0
                }
              }
            }
          }
          if(tempItems.length < (perPage || 24)) {
            setHasMore(false)
          }else {
            setHasMore(true)
          }
  
          let tempMap = page == 0 ? new Map() : itemsPerPage
          tempMap.set(page, tempItems)
          const sortedByPage = Array.from(tempMap.entries()).sort((a, b) => a[0] - b[0])
          let tempItems2 = []
          for(const elem of sortedByPage) {
            tempItems2 = tempItems2.concat(elem[1])
          }
          setItemsPerPage(tempMap)
          setItems(tempItems2)

        }

      } catch (error) {
        console.error('Unable to fetch price data:', error)   
      }
    }

    fetchData()
  }, [setItems, prices, props])

  return {
    items,
    hasMore
  }
}

export default useItems
