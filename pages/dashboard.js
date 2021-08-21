import React,{useState,useRef,useEffect,} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
//import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "@material/react-drawer/dist/drawer.css";
import Appbar from '@material-ui/core/AppBar'
//import '@material/react-drawer/index.scss';
import {Row,Container,Col} from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import {motion} from 'framer-motion'
import PersonOutline from '@material-ui/icons/PersonOutline'
import PeopleOutline from '@material-ui/icons/PeopleOutline'
import Payment from '@material-ui/icons/PaymentOutlined'
import Notification from '@material-ui/icons/NotificationImportantOutlined'
import Poll from '@material-ui/icons/PollOutlined'
import AccountBallanceIcon from '@material-ui/icons/AccountBalanceWalletOutlined'
import Account from '@material-ui/icons/AccountBalanceOutlined'
import AttachMoney from '@material-ui/icons/AttachMoneyOutlined'
import Paper from '@material-ui/core/Paper'
import {Card} from 'reactstrap'
import Button from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined'
import CreditCardIcon from '@material-ui/icons/CreditCardOutlined'
import LocalAtmIcon from '@material-ui/icons/LocalAtmOutlined'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BarChartIcon from '@material-ui/icons/BarChart'
import { Chart } from "react-google-charts";
import Image from 'next/image'
import { ResponsivePieCanvas } from '@nivo/pie'
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerAppContent,
    DrawerTitle,
    DrawerContent,
  } from '@material/react-drawer';
  import Guage from '../components/guage'
  import Avatar from '@material-ui/core/Avatar'
  import carl from '../img/carl.jpg'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress'
import Cookie from 'js-cookie'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveSunburst } from '@nivo/sunburst'
import { ResponsiveBar } from '@nivo/bar'
// import ClipLoader from "react-spinners/ClipLoader";
// import BounceLoader from  "react-spinners/BounceLoader";
// import DotLoader from  "react-spinners/DotLoader";
// import FadeLoader	from "react-spinners/FadeLoader";
import {HashLoader,RingLoader,PulseLoader,PropagateLoader,MoonLoader,PuffLoader} from  "react-spinners";
import { ResponsiveBullet } from '@nivo/bullet'
import LinearProgress from '@material-ui/core/LinearProgress';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ToolTip from '@material-ui/core/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBtc, faEthereum } from '@fortawesome/free-brands-svg-icons'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import Router from 'next/dist/next-server/lib/router/router';
import {Formik} from 'formik'
import {Input,FormControl,InputAdornment} from '@material-ui/core'
import CryptoCompare from 'react-crypto-compare'
import Table from 'rc-table'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { Line, Bar } from "react-chartjs-2";
import tetherIcon from '../img/tether.svg'
// import {
//     chartExample1,
//     chartExample2,
//     chartExample3,
//     chartExample4,
// } from '../variables/charts'
import safemoon from '../img/safemoon.svg'
import btcIcon from '../img/btc.png'
import ethIcon from '../img/eth.png'
import Close from '@material-ui/icons/CloseOutlined'
import CheckCircle from '@material-ui/icons/CheckCircleOutline'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationCity'
import black from '../img/black.png'
import AlertIcon from '@material-ui/icons/NotificationImportantOutlined'
import NotificationsNone from '@material-ui/icons/NotificationsActiveRounded'
import white from '../img/white.png'
import logo1 from '../img/logo1.png'
import Head from 'next/head'
import MyFooter from '../components/myFooter'




const Dashboard=(props)=>{
    const [mobile,setMobile]=useState()
    const [content,setContent]=useState('Balance')
    const [balanceElev,setBalanceElev]=useState(7)
    const [withdrawElev,setWithdrawElev]=useState(7)
    const [depositElev,setDepositElev]=useState(7)
    const [chartsElev,setChartsElev]=useState(7)
    const [messagesElev,setMessagesElev]=useState(7)
    const [info,setInfo]=useState()
    const username=Cookie.get('user')
    const [gotten,setGotten]=useState(false)
    const [analPair,setPair]=useState('BTCUSD')
    const [depoPair,setDepoPair]=useState('BTC')
    const [loading,setLoading]=useState(true)
    const [showDepo,setShowDepo]=useState(false)
    const [deposit,setDeposit]=useState(0)
    const [bigChartData, setbigChartData] = React.useState("data1");
    const [open,setOpen]=useState()
    const [address,setAddress]=useState()
    const [withdraw,setWithdraw]=useState(false)
    const [withdrawal,setWithdrawal]=useState(0)
    const [pending,setPending]=useState(false)
    const [coinData,setCoinData]=useState()
    const [btc,setBtc]=useState()
    const [eth,setEth]=useState()
    const [coinChart,setCoinChart]=useState(false)
    const [btcData,setBtcData]=useState(false)
    const [ethData,setEthData]=useState(false)
    const [phone,setPhone]=useState()
    const [prevCon,setPrevCon]=useState()
    const [moon,setMoon]=useState()
    const [tether,setTether]=useState()
    const [moonData,setMoonData]=useState(false)
    const [tetherData,setTetherData]=useState(false)
    const [action,setAction]=useState('confirm')


    useEffect(()=>{
    let width=window.innerWidth
    let user=Cookie.getJSON('user')
    setContent('Balance')
    console.log(name)
    if(width<500){
      setMobile(false)
      console.log('mobile view')
      setPhone(true)
    }
    else if(width>500){
        setMobile(true)
        console.log('desktop view')
        setPhone(false)
    }
    getInfo()
   

    },[])

    useEffect(()=>{
       
        
        //getInfo()
       getBtc()
    
    },[])

    useEffect(()=>{
        
        //getInfo()
       getEth()
    
    },[])
    useEffect(()=>{
        
        //getInfo()
       getTether()
    
    },[])

    useEffect(()=>{
        
        //getInfo()
       getMoon()
    
    },[])

    //const container = window !== undefined ? () => window().document.body : undefined;

    let chartOptions = {
        maintainAspectRatio: false,
        plugins: {
          legend: {
              display: false
          },
          title:{
              display:false
          },
          tooltips:{
              display:false,
              callbacks: {
                label: () => null,
                title: () => null,
                enabled:false
            },
          },
          labels:{
              display:false
          }
      },
       
        tooltips: {
            display:false,
          callbacks: {
              label: () => null,
              title: () => null,
          },
          enabled:false
      },

      title:{
        display:false
    },

      labels:{
          display:false
      },

      legend:{
          display:false
      },

        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 10,
                fontColor: "#9a9a9a",
            
                
              },
              stacked:false,

            },
          ],
          xAxes: [
            {
            //   barPercentage: 1.6,
            //   gridLines: {
            //     drawBorder: false,
            //     color: "rgba(29,140,248,0.1)",
            //     zeroLineColor: "transparent",
            //   },
            display:false,
            labels:{
                display:false
            },
              ticks: {
                //padding: 10,
                fontColor: "blue",
                display:false
              },
            },
            
          ],
        },
      };

      let chartExample1 = {
        data1: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(154, 120, 1, 0.2)");
          gradientStroke.addColorStop(0.4, "rgba(154, 120, 1, 0.0)");
          gradientStroke.addColorStop(0, "rgba(154, 120, 1, 0)"); //blue colors
      
          return {
            labels: btc.x,
            datasets: [
              {
                
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#9a7801",
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#9a7801",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "rgba(154, 120, 1, 0.2)",
                pointBorderWidth: 0,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 0,
                
                data:btc.y,
              },
            ],
          };
        },
        data2: (canvas) => {
            let ctx = canvas.getContext("2d");
        
            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
            gradientStroke.addColorStop(1, "rgba(154, 120, 1, 0.2)");
            gradientStroke.addColorStop(0.4, "rgba(154, 120, 1, 0.0)");
            gradientStroke.addColorStop(0, "rgba(154, 120, 1, 0)"); //blue colors
        
            return {
              labels: tether.x,
              
              datasets: [
                {
                  
                  fill: true,
                  backgroundColor: gradientStroke,
                  borderColor: "#9a7801",
                  borderWidth: 1,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#9a7801",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "rgba(154, 120, 1, 0.2)",
                  pointBorderWidth: 5,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 0,
                  
                  data:tether.y,
                },
              ],
            };
          },
          data3: (canvas) => {
            let ctx = canvas.getContext("2d");
        
            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
            gradientStroke.addColorStop(1, "rgba(154, 120, 1, 0.2)");
            gradientStroke.addColorStop(0.4, "rgba(154, 120, 1, 0.0)");
            gradientStroke.addColorStop(0, "rgba(154, 120, 1, 0)"); //blue colors
        
            return {
              labels: moon.x,
              datasets: [
                {
                  
                  fill: true,
                  backgroundColor: gradientStroke,
                  borderColor: "#9a7801",
                  borderWidth: 1,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#9a7801",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "rgba(154, 120, 1, 0.2)",
                  pointBorderWidth: 5,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 0,
                  
                  data:moon.y,
                },
              ],
            };
          }
    }

        let chartExample2 = {
            data2: (canvas) => {
              let ctx = canvas.getContext("2d");
          
              let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
          
              gradientStroke.addColorStop(1, "rgba(154, 120, 1, 0.2)");
              gradientStroke.addColorStop(0.4, "rgba(154, 120, 1, 0.0)");
              gradientStroke.addColorStop(0, "rgba(154, 120, 1, 0)"); //blue colors
          
              return {
                labels: eth.x,
                datasets: [
                  {
                    
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#9a7801",
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#9a7801",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "rgba(154, 120, 1, 0.2)",
                    pointBorderWidth: 5,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 0,
                    
                    data:eth.y
                  },
                ],
              };
            },}

            const getEth=()=>{
                axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=minutes')
                .then((res)=>{
                   
                    let x=[]
                    let y=[]
                    res.data.prices.forEach((item)=>{
                        x.push(parseInt(item[0].toString().slice(0,2))),
                        y.push(parseInt(item[1].toString().slice(0,3)))
                    })
                    setEth({
                        x:x.slice(0,25),
                        y:y.slice(0,25)
                    })
                    //setBtcData(res.data.prices)
                    setEthData(true)
                    console.log(eth)
                })
                .catch((err)=>{
                    console.log(err)
                })
               
            }

            const getTether=()=>{
                axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=7&interval=minutes')
                .then((res)=>{
                   
                    let x=[]
                    let y=[]
                    res.data.prices.forEach((item)=>{
                        x.push(parseInt(item[0].toString().slice(0,2))),
                        y.push(parseInt(item[1].toString().slice(0,3)))
                    })
                    setTether({
                        x:x.slice(0,25),
                        y:y.slice(0,25)
                    })
                    //setBtcData(res.data.prices)
                    setTetherData(true)
                    console.log(eth)
                })
                .catch((err)=>{
                    console.log(err)
                })
               
            }


            const getMoon=()=>{
                axios.get('https://api.coingecko.com/api/v3/coins/safemoon/market_chart?vs_currency=usd&days=7&interval=minutes')
                .then((res)=>{
                   
                    let x=[]
                    let y=[]
                    res.data.prices.forEach((item)=>{
                        x.push(parseInt(item[0].toString().slice(0,2))),
                        y.push(parseInt(item[1].toString().slice(0,3)))
                    })
                    setMoon({
                        x:x.slice(0,25),
                        y:y.slice(0,25)
                    })
                    //setBtcData(res.data.prices)
                    setMoonData(true)
                    console.log(eth)
                })
                .catch((err)=>{
                    console.log(err)
                })
               
            }


    const getBtc=()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=minutes')
        .then((res)=>{
            //console.log(res.data.prices)
            // setBtcData(res.data.prices)
            // console.log(btcData)
            //setCoinData(res.data.prices)
            let x=[]
            let y=[]
            res.data.prices.forEach((item)=>{
                x.push(parseInt(item[0].toString().slice(0,2))),
                y.push(parseInt(item[1].toString().slice(0,3)))
            })
            setBtc({
                x:x.slice(0,25),
                y:y.slice(0,25)
            })
            setBtcData(true)
            // setCoinChart(true)
            // console.log(btc)
            
        })
        .catch((err)=>{
            console.log(err)
        })
       
    }

    const getInfo=()=>{
        let user=Cookie.getJSON('user')
        //let user=JSON.parse(raw)
        
        axios.post('/api/info',{user})
        .then((res)=>{
            //console.log(user)
            //let item=JSON.parse(res.data)
            setInfo(res.data)
            setGotten(true)
            setLoading(false)
        })
        .catch((err)=>{
            if(err.response.data=='mongo wahala'){
                alert('Unnable to connect to the server please check your network connection and refresh this page')
                setLoading(false)
               
               }
        })
    }

    

    
    
   
    const pieData=[
        {
          "id": "futures",
          "label": "futures",
          "value": 25,
          "color": "hsl(220, 70%, 50%)"
        },
        {
          "id": "comodities",
          "label": "comodities",
          "value": 105,
          "color": "hsl(312, 70%, 50%)"
        },
        {
          "id": "crypto",
          "label": "crypto",
          "value": 532,
          "color": "hsl(280, 70%, 50%)"
        },
        {
          "id": "indeces",
          "label": "indeces",
          "value": 367,
          "color": "hsl(320, 70%, 50%)"
        },
        {
          "id": "stocks",
          "label": "stocks",
          "value": 244,
          "color": "hsl(112, 70%, 50%)"
        }
      ]
    
    







    const pieComponent= <ResponsivePie
    data={pieData}
    margin={{ top: 30, right: 40, bottom: 50, left: 40 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    // legends={[
    //     {
    //         // anchor: 'bottom',
    //         direction: 'row',
    //         justify: false,
    //         translateX: 0,
    //         translateY: 56,
    //         itemsSpacing: 0,
    //         itemWidth: 100,
    //         itemHeight: 18,
    //         itemTextColor: '#999',
    //         itemDirection: 'left-to-right',
    //         itemOpacity: 1,
    //         symbolSize: 18,
    //         symbolShape: 'circle',
    //         effects: [
    //             {
    //                 on: 'hover',
    //                 style: {
    //                     itemTextColor: '#000'
    //                 }
    //             }
    //         ]
    //     }
    // ]}
/>

    const handleResize=()=>{
        let width=window.innerWidth
        if(width<400){
          setMobile(true)
        }
        else if(width>400){
            setMobile(false)
        }
    }

    const toggleDrawer=()=>{
        mobile ? setMobile(false) : setMobile(true)
        //phone && !open ? setContent('') : setOpen(true)

    }

    const ballanceContent=()=>{
        setContent('balance')
        setBalanceElev(15)
    }
    const withdrawContent=()=>{
        setContent('withdraw')
        setWithdrawElev(15)
    }
    const depositContent=()=>{
        setContent('deposit')
        setDepositElev(15)
    }
    const analysisContent=()=>{
        setContent('charts')
        setChartsElev(15)
    }

    // const data = [
    //     ["Task", "Hours per Day"],
    //     ["Work", 11],
    //     ["Eat", 2],
    //     ["Commute", 2],
    //     ["Watch TV", 2],
    //     ["Sleep", 7] // CSS-style declaration
    // ];

    // const options = {
    //     title: "My Daily Activities",
    //     pieHole: 0.4,
    //     is3D: true,
    //     // chartArea:{
    //     //     //backgroundColor:'#ffab00'
           
    //     // },
    //     backgroundColor:{
    //         stroke:'#ffab00'
    //     }
        
    // };

    const columns=[
    
        {
          title:'Amount($)',
          dataIndex:'amount',
          key:'amount',
          width:50,
          fixed:false
        },
        {
          title:'Pair',
          dataIndex:'pair',
          key:'pair',
          width:50,
          fixed:false
        },
       
        {
          title:'Date',
          dataIndex:'date',
          key:'date',
          width:50,
          fixed:false
        },
        {
            title:'Id',
            dataIndex:'key',
            key:'key',
            width:50,
            fixed:false,
            style:{
                color:'#ffab00'
            }
          },
          {
            title:'Confirm',
            dataIndex:'',
            key:'key',
            width:50,
            render:()=> action=='confirm' ?
             <Grid container alignItems='center'>
                 <Button style={{color:'#ffab00',fontSize:20}}>Confirm</Button>
             </Grid>
            //  : action=='load' ?
            //  <Grid container alignItems='center' justify='center'>
            //      <HashLoader size={30} color='#ffab00' />
            // </Grid>
            :
            null

          },
        
      ]

    const drawer=()=>{
        let names=['tim','ed','sean']
        let options=[
            {
                name:'Balance',
                icon:<Account style={{width:40,height:40,color:'#ffab00'}} />,
            },
            {
                name:'Deposit',
                icon:<Payment style={{width:40,height:40,color:'#ffab00'}} />,
            },
            {
                name:'Withdraw',
                icon:<LocalAtmIcon style={{width:40,height:40,color:'#ffab00'}} />,
            },
            {
                name:'Confirm',
                icon:<Poll style={{width:40,height:40,color:'#ffab00'}} />,
            },
        ]
       
        return (
            <div>
                {options.map((item)=>(
                   <div>
                   <Paper onClick={()=>{setContent(item.name)}} elevation={balanceElev}  style={{backgroundColor:'black',marginBottom:40,width:'90%',borderBottomRightRadius:70,borderTopRightRadius:70}}  className='dashboard-options'>
                           <motion.div whileHover={{scale:1.2}}>
   
                           <ListItem button>
                       <ListItemIcon>
                            {item.icon}
                           </ListItemIcon>
                       <ListItemText style={{color:'white'}}>
                              {item.name}
                           </ListItemText>
                       </ListItem>
                         
                           </motion.div>
                      </Paper>
               </div>
                ))}
            </div>
        )

    }

    const handleDeposit=(handleChange)=>{
        //setDeposit(money)
        handleChange('amount')
        
        
    }

    const appContent=()=>{
       if(content=='Balance'){
           return (
               <Grid justify='center' container spacing={3} className='container-p'  style={{padding:5,marginTop:60,width:'100%'}} >
                   <Grid className='top-row' justify='center' style={{height:'auto',padding:10}} container direction='row' spacing={3}>
                   <Grid className='top-balance' justify='center' spacing={3} style={{height:400,width:'100%'}} item xs={12} md={4}>
<Paper style={{width:'95%'}}  className='profile-paper balance-paper'>
  <Grid direction='row' style={{padding:5,}} container>
      <Grid md={3} xs={3} style={{}} item>
          <div>
              <AccountBallanceIcon style={{width:60,height:60,color:'#ffab00'}} />
          </div>
      </Grid>
      <Grid md={6} xs={6} style={{}} item>
          <div style={{marginLeft:-10,marginBottom:-20}}>
          <h5>
                  Balance
              </h5>
              {/* <Button style={{color:'white'}} onClick={()=>console.log(eth)}>
                  click
              </Button> */}
          </div>
      </Grid>
      <Grid justify='flex-end' alignItems='flex-end' md={2} xs={2} style={{}}  item>
          <ToolTip arrow title='Total accessible balance in dollars' style={{display:'grid',placeItems:'flex-end'}}>
             <IconButton>
             <HelpOutlineIcon style={{width:30,height:30,color:'#ffab00',marginLeft:50,marginTop:-22}} />
             </IconButton>
          </ToolTip>
      </Grid>
  </Grid>
  <Grid style={{marginTop:-10}} direction='row' justify='center' alignItems='center' container>
      <Grid md={3} xs={3}  item>
          <AttachMoney className='dollar-sign' style={{height:50,width:50,color:'#ffab00',marginLeft:40}} />
      </Grid>
      <Grid md={9} xs={9} item>
 {gotten ? <h3 className='balance-value'  >{info.balance}.00</h3> : <h5>0.00</h5> }
 
      </Grid>

  </Grid>


  <Grid justify='center' alignItems='center' id='level' style={{marginLeft:1,marginTop:10}} direction='row' container>
  <Grid 
 // justify='flex-end' alignItems='flex-end' 
  item md={2} xs={2} style={{color:'white',marginLeft:5,marginBottom:-5}}>
           Level
          </Grid>

          <Grid justify='center' alignItems='center' item md={2} xs={2} style={{color:'white'}}>
              
          <StarBorderIcon style={{height:35,width:35,marginTop:9,color:'#ffff'}}  />
          </Grid>


          <Grid justify='center' alignItems='center' item md={2} xs={2} style={{color:'white',}}>
              <ToolTip title='last deposit'>
                  <IconButton>
                  <HourglassEmptyIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}}  />
                  </IconButton>
              </ToolTip>
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={4} xs={4} style={{color:'white',marginBottom:-9}}>
              22/9/2021
         
          </Grid>
  </Grid>


  <Grid id='progress' style={{marginLeft:15}} direction='row' container>
  <Grid item md={3} xs={3} style={{color:'white',}}>
              Progress
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={9} xs={9} style={{color:'white'}}>
              
          <LinearProgress color='primary'  style={{height:10,width:'80%',marginTop:9,marginLeft:-8,color:'#ffab00'}} variant="determinate" value={7} />
          </Grid>
  </Grid>
  <Grid id='progress' style={{marginLeft:15,marginTop:25}} direction='row' container>
  <Grid item md={3} xs={3} style={{color:'white',}}>
              Affiliate
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={9} xs={9} style={{color:'white',}}>
              
          <LinearProgress color='primary'  style={{height:10,width:'80%',marginTop:9,marginLeft:-8,color:'#ffab00'}} variant="determinate" value={67} />
          </Grid>
  </Grid>
  <Grid id='progress' style={{marginLeft:15,marginTop:10}} container>
  <Grid item md={2} xs={2} style={{color:'white',}}>
  <PeopleOutline style={{color:'#ffab00'}} />
          
          </Grid>
          <Grid  justify='center' alignItems='center' item md={10} xs={10} style={{color:'white',color:'white'}}>
             {gotten && !mobile
             ?
           
              <a style={{color:'#ffab00',width:100}}>
                 www.winstertrade<br/>investment.com/{info.username}
              </a>
          
             :
              gotten && mobile
             ?
             <a style={{color:'#ffab00',}}>
             www.winstertradeinvestment.com/<br/>{info.username}
         </a>
             :
             <span>

             </span>
             

          }
          <Grid>
          <ToolTip title='Your referal link' >
                <HelpOutlineIcon style={{color:'#ffab00'}} />
            </ToolTip>
          </Grid>

          </Grid>
  </Grid>



</Paper>
</Grid>

<Grid item style={{height:400,width:'85%'}}  direction='column'  xs={12} md={4}>
<Grid justify='center'  style={{}} item>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid container  alignItems='center' direction='row'>
   
  <Grid style={{}} xs={2} md={2} item>
  <Image priority={true} responsive width={30} height={30} className='coin-icon' src={btcIcon}/>
  </Grid>

  <Grid style={{marginTop:-8}}  xs={8} md={8} item >
     <h5>
{gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'BTC'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
     </h5>
  </Grid>

  <Grid xs={2} md={2} item >
     <ToolTip style={{marginTop:-20,marginLeft:15}} title='Bitcoin wallet ballance'>
         <IconButton>
             <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
         </IconButton>
     </ToolTip>
  </Grid>
  <Grid  style={{width:'100%'}} container>
 {btcData ? <div className='dashboard-chart'  style={{ position: "relative",margin:0}}>
    <Line
        style={{marginBottom:-30,height:170}}
        data={chartExample1.data1}
        options={chartOptions}
      />
 </div>
        :
        null
    }
  </Grid>
  </Grid>
 
</Paper>
</Grid>
<Grid  item>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid container  alignItems='center' direction='row'>
  <Grid style={{}} xs={2} md={2} item>
  <Image priority={true} responsive width={30} height={30} className='coin-icon' src={ethIcon}/>
  </Grid>

  <Grid style={{marginTop:-8}} xs={8} md={8} item>
     <h5>
{gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'ETH'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
     </h5>
  </Grid>

  <Grid xs={2} md={2} item>
     <ToolTip style={{marginTop:-20,marginLeft:15}} title='Ethereum wallet ballance'>
         <IconButton>
             <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
         </IconButton>
     </ToolTip>
  </Grid>
  <Grid style={{width:'100%'}} container>
     {ethData ?    <div className='dashboard-chart'  style={{ position: "relative",margin:0}}>
    <Line
        style={{marginBottom:-30,height:170}}
        data={chartExample2.data2}
        options={chartOptions}
      />
 </div>
        :
        null
        }
        </Grid>
  </Grid>

</Paper>
</Grid>
</Grid>
<Grid item style={{height:400,width:'85%'}}  direction='column'  xs={12} md={4}>
<Grid justify='center'  style={{}} item>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid container  alignItems='center' direction='row'>
   
  <Grid style={{}} xs={2} md={2} item>
  <Image priority={true} responsive width={30} height={30} className='coin-icon' src={tetherIcon}/>
  </Grid>

  <Grid style={{marginTop:-8}}  xs={8} md={8} item >
     <h5>
{gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'USDT'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
     </h5>
  </Grid>

  <Grid xs={2} md={2} item >
     <ToolTip style={{marginTop:-20,marginLeft:15}} title='Bitcoin wallet ballance'>
         <IconButton>
             <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
         </IconButton>
     </ToolTip>
  </Grid>
  <Grid  style={{width:'100%'}} container>
 {tetherData ? <div className='dashboard-chart'  style={{ position: "relative",margin:0}}>
    <Line
        style={{marginBottom:-30,height:170}}
        data={chartExample1.data2}
        options={chartOptions}
      />
 </div>
        :
        null
    }
  </Grid>
  </Grid>
 
</Paper>
</Grid>
<Grid  item>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid container  alignItems='center' direction='row'>
  <Grid style={{}} xs={2} md={2} item>
  <Image priority={true} responsive width={30} height={30} className='coin-icon' src={safemoon}/>
  </Grid>

  <Grid style={{marginTop:-8}} xs={8} md={8} item>
     <h5>
{gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'SAFEMOON'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
     </h5>
  </Grid>

  <Grid xs={2} md={2} item>
     <ToolTip style={{marginTop:-20,marginLeft:15}} title='Ethereum wallet ballance'>
         <IconButton>
             <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
         </IconButton>
     </ToolTip>
  </Grid>
  <Grid style={{width:'100%'}} container>
     {moonData ?    <div className='dashboard-chart'  style={{ position: "relative",margin:0}}>
    <Line
        style={{marginBottom:-30,height:170}}
        data={chartExample1.data3}
        options={chartOptions}
      />
 </div>
        :
        null
        }
        </Grid>
  </Grid>

</Paper>
</Grid>
</Grid>


                   </Grid>
                   <Grid style={{marginTop:10}} container direction='row' spacing={3}>

                   <Grid  className='crypto-dashboa' md={8} xs={12} justify='center'  style={{width:500}} container>
              
                <Grid style={{width:'100%',marginLeft:44}} item>
                <Paper style={{width:'97%',height:'100%'}} className='profile-paper bottom-profile'>
               <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={460}></CryptoCurrencyMarket>
               </Paper>
                </Grid>
              
              </Grid>


              <Grid style={{}} justify='center'  item xs={12} md={4}>
<Paper style={{height:460,padding:0,marginTop:10,width:'100%'}} className='profile-paper'>
 
<TechnicalAnalysis width='100%' symbol={analPair} style={{backgroundColor:'white'}} isTransparent colorTheme="dark"></TechnicalAnalysis>
  
</Paper>
</Grid>
                   </Grid>

     
          
               </Grid>
           )
       }

       else if(content=='Deposit'){
           return (
                
                    <Grid style={{marginTop:20,display:'grid',placeItems:'center'}} container justify='center' alignItems='center'>
                        <Paper style={{}} className='profile-paper deposit-paper'>
                           <Grid item style={{marginBottom:30}} >
                               <h3 style={{textAlign:'center'}}>
                                   Make a <span style={{color:'#ffab00'}}>Deposit</span>
                               </h3>
                           </Grid>
                           <Grid style={{}} container>
                               <form>
                                   <Formik initialValues={{amount:''}} onSubmit={(value)=>{
                                        
                                        let today=new Date()
                                        let year=today.getFullYear()+'/'
                                        let time=today.getHours()+":"
                                        let month=today.getMonth()+'/'
                                        let day=today.getDate()
                                        let date=`${year}${month}${day}`

                                       let item={
                                           investment:value.amount,
                                           pair:depoPair,
                                           //worth:value.worth,
                                           date:date,
                                           username:info.username,
                                           status:'pending'
                                           
                                       }
                                       console.log(item)
                                      
                                       
                                      if(value.amount){
                                        setPending(true)
                                        axios.post('/api/invest',{item})
                                        .then((res)=>{
                                            if(res.data=='SUCCESS'){
                                                setPending(false)
                                                setShowDepo(true)
                                            }
                                        })
                                        .catch((err)=>{
                                         if(err.response.data=='mongo wahala'){
                                             alert('Unnable to connect to the server please try again later')
                                           setPending(false)
                                            }
                                        })
                                      }
                                      else {
                                          alert('All fields are required')
                                      }
                                       
                                   }} >{({handleChange,handleSubmit,values,handleReset,handleBlur})=>(
                                       <Grid item style={{display:'grid',placeItems:'center'}} >

                                           <Grid item justify='center' alignItems='center'>
                                                <a style={{textAlign:'center',color:'white',fontSize:18}}>
                                                    You can easily make a deposit to your account it is simple and straightforward
                                                </a>
                                           </Grid>
                                           <Grid className='coin-row' style={{marginTop:50}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='BTC' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={70} height={70}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setDepoPair('BTC');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={70} height={70} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='ETH' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('ETH');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='USDT' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setDepoPair('USDT');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={80} height={80} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='SAFEMOON' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('SAFEMOON');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
                                         
                                                                <Input
        className='app-input first-input '
        style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
        placeholder='Amount in USD'
          onBlur={()=>setShowDepo(false)}
          id="amount"
          color='primary'
          autoComplete={false}
          type='number'
          value={values.amount}
          //onChange={()=>{handleChange('amount')}}
          onChange={()=>setDeposit(values.amount)}
          onInput={handleChange('amount')}
        //   startAdornment={
        //     <InputAdornment position="start">
        //      <PersonOutline style={{color:"#ffab00"}} />
        //     </InputAdornment>
        //   }
        />

                                <Grid container justify='center' alignItems='center'>
                                
                                        <h3 style={{textAlign:'center'}}>
                                        <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={deposit} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                                        </h3>
                                </Grid>

                                <Grid style={{marginTop:20}} justify='center' alignItems='center' container>
                                   {pending && content=='Deposit'
                                    ? 
                                    <HashLoader color='#ffab00' loading={true} size={42} />
                                    :
                                   
                                    <Button onClick={handleSubmit} style={{color:'#ffab00',}}>
                                        Proceed
                                        </Button>
                                    }
                                </Grid>
                                <Grid style={{marginTop:-20}} justify='center' alignItems='center' item>
                              
                                  <Grid container>
                                 
                                  {showDepo
                                    ?
                                 <Grid container>
                                       
                                        <p onBlur={()=>setShowDepo(false)} style={{color:'white',textAlign:'center',fontSize:20}}>
                                    You are about to make an deposit of <span style={{color:'#ffab00'}}>${values.amount}</span> You are required to pay the sum of <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={deposit} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                                    to the wallet address {depoPair=='BTC' ? <a style={{color:'#ffab00'}}>bc1q30ljt5azln7ygmtaayuw4lak3ez2cl05qdzg6d</a> : depoPair=='ETH' ? <a style={{color:'#ffab00'}}>0x5B086aF3b099f23f4BC5fc7754aE63484F48AC79</a> : <span></span>} and upload proof of Payment
                                </p>
                                 </Grid>
                                    :
                                    <span></span>
                                    }
                                  </Grid>
                                 
                                </Grid>
                                       </Grid>
                                   )}

                                   </Formik>
                               </form>
                           </Grid>
                        </Paper>
                    </Grid>

                
           )
       }





       else if(content=='Withdraw'){
           return (
            <Grid style={{marginTop:50}} container justify='center' alignItems='center'>
            <Paper style={{}} className='profile-paper withdraw-paper'>
               <Grid item style={{marginBottom:30}} >
                   <h3 style={{textAlign:'center'}}>
                       Make a <span style={{color:'#ffab00'}}>Withdrawal</span>
                   </h3>
               </Grid>
               <Grid style={{}} item>
                   <form>
                       <Formik initialValues={{amount:'',address:''}} onSubmit={(value)=>{
                            
                            let today=new Date()
                            let year=today.getFullYear()+'/'
                            let time=today.getHours()+":"
                            let month=today.getMonth()+'/'
                            let day=today.getDate()
                            let date=`${year}${month}${day}`

                           let item={
                               amount:value.amount,
                               pair:depoPair,
                               //worth:value.worth,
                               date:date,
                               username:info.username,
                               status:'pending',
                               address:value.address
                               
                           }
                           console.log(item)
                          
                           
                          if(value.amount && value.address){
                            setPending(true)
                            axios.post('/api/withdraw',{item})
                            .then((res)=>{
                                if(res.data=='SUCCESS'){
                                    setPending(false)
                                    setWithdraw(true)
                                }
                            })
                            .catch((err)=>{
                             if(err.response.data=='mongo wahala'){
                                 alert('Unnable to connect to the server please try again later')
                               setLoading(false)
                                }
                            })
                          }

                          else {
                              alert('All fields are required')
                          }
                           
                       }} >{({handleChange,handleSubmit,values})=>(
                           <Grid item style={{display:'grid',placeItems:'center'}} >

                               <Grid style={{padding:20,textAlign:'center'}} item justify='center' alignItems='center'>
                                    <a className=''  style={{textAlign:'center',color:'white',fontSize:20}}>
                                        You can easily make a Withdrawal to your designated crypto address within 3
                                         bussiness days, which can be tracked through your reference number
                                    </a>
                               </Grid>
                               <Grid className='coin-row' style={{marginTop:50}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='BTC' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={70} height={70}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setDepoPair('BTC')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={70} height={70} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='ETH' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('ETH')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='USDT' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setDepoPair('USDT')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={80} height={80} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='SAFEMOON' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('SAFEMOON')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
                                         
                                                    <Input
className='app-input first-input '
style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
placeholder='Amount in USD'

id="amount"
color='primary'
autoComplete={false}
type='number'
value={values.amount}
//onChange={()=>{handleChange('amount')}}
onChange={()=>setWithdrawal(values.amount)}
onInput={handleChange('amount')}
//   startAdornment={
//     <InputAdornment position="start">
//      <PersonOutline style={{color:"#ffab00"}} />
//     </InputAdornment>
//   }
/>


<div>
<Input
className='app-input first-input '
style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
placeholder='wallet address'

id="amount"
color='primary'
autoComplete={false}
type='number'
value={values.address}
//onChange={()=>{handleChange('amount')}}
onChange={handleChange('address')}
//onInput={handleChange('amount')}
//   startAdornment={
//     <InputAdornment position="start">
//      <PersonOutline style={{color:"#ffab00"}} />
//     </InputAdornment>
//   }
/>
</div>

                    <Grid container justify='center' alignItems='center'>
                    
                            <h3>
                            <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={withdrawal} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                            </h3>
                    </Grid>

                    <Grid style={{marginTop:20}} justify='center' alignItems='center' container>
                       {pending && content=='Withdraw'
                        ? 
                        <HashLoader color='#ffab00' loading={true} size={42} />
                        :
                       
                        <Button onClick={handleSubmit} style={{color:'#ffab00',}}>
                            Proceed
                            </Button>
                        }
                    </Grid>
                    <Grid style={{marginTop:30}} justify='center' alignItems='center' item>
                        {withdraw
                        ?
                        <p align='center' style={{color:'white'}}>
                        You are about to make a withdrawal of <span style={{color:'#ffab00'}}>${values.amount}</span> which is equivalent to <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={withdrawal} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                        to the wallet address {values.address}, your request will be approved shortly and completed within 3 bussiness days
                    </p>
                        :
                        <span></span>
                        }
                    </Grid>
                           </Grid>
                       )}

                       </Formik>
                   </form>
               </Grid>
            </Paper>
        </Grid>

           )
       }
       else if(content=='Confirm') {
        return (
            <Grid direction container style={{padding:30,marginTop:20}}>
               <Paper style={{backgroundColor:'rgba(0,0,0,0)',width:'100%',marginTop:20}}>
               <Table emptyText={()=><p style={{fontSize:20,color:'white',padding:20}}>No pending deposits</p>} 
               title={()=><h3 style={{}}>Pending deposits</h3>} rowClassName='table-row' 
               style={{color:'white'}} transformColumns className='depo-table' 
               tableLayout='auto' useFixedHeader={false} scroll={{y:false,x:false}} columns={columns}  data={gotten ? info.investment : null} />
               </Paper>
            </Grid>
        )
       }
    }

    return (
        <div>
          <Head>
            <title>
              Dashboard
            </title>
          </Head>

            <AppBar
                title='Inbox'
                color='primary'
                style={{backgroundCololor:"black",height:60,}}
                className='app-bar'
            >
                     <Toolbar>
                       { phone ?
                          <IconButton onClick={toggleDrawer}>
                          <MenuIcon style={{height:50,width:50,color:"black"}} />
                          </IconButton>
                          : !phone ?
                          <IconButton>
                          <Image layout='intrinsic' width={50} height={50} color='ffab00' src={black} />
                          </IconButton>
                          :
                          null
                       }
                 
                  <h5 style={{color:'black'}} >
                    Dashboard
                  </h5>


                 <Grid style={{}} justify='flex-end' spacing={2} container direction='row'>
              
                   <Grid justify='flex-end' style={{}} container xs={3} md={2}>
                   <IconButton onClick={()=>{Router.push('/home')}}>
                    <ToolTip  >
                    <NotificationsNone style={{width:40,height:40,color:'black'}} />
                    </ToolTip>
                  </IconButton>
                   </Grid>
                   <Grid justify='flex-end' container xs={3} md={2}>
                   <IconButton onClick={()=>{Router.push('/home')}}>
                    <ToolTip  >
                    <ExitToAppIcon style={{width:40,height:40,color:'black'}} />
                    </ToolTip>
                  </IconButton>
                   </Grid>
              

                 </Grid>
              </Toolbar>

            </AppBar>
             
            

        <Drawer
          className='drawer-container'
          dismissible
          open={mobile}
          style={{backgroundColor:'black',}}
          //onOpen={()=>{phone ? setContent('') : setOpen(true)}}
          //className='drawer'
        >
      
            <DrawerContent>
         
                <List>
                <div>
        <DrawerHeader style={{marginTop:100}}>

              <div style={{textAlign:'center',color:'#ffab00'}}>
              {!loading && gotten ? <h3 style={{color:'#ffab00'}}>{info.username}</h3>  
    
    : <HashLoader color={'#ffab00'} loading={true}  size={50} /> }
              </div>
            </DrawerHeader>
        </div>
               
                  {drawer()}
                
                </List>

            </DrawerContent>
        </Drawer>
        <DrawerAppContent className='drawer-app-content'>
            <div >
            {appContent()}
         
            </div>
        </DrawerAppContent>
          
          <MyFooter />

        
        </div>
    )
}

 export default Dashboard;


