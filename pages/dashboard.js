import React,{useState,useRef,useEffect, Profiler} from 'react';
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
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from '../variables/charts'






const Dashboard=()=>{
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

    
    useEffect(()=>{
    let width=window.innerWidth
    let user=Cookie.getJSON('user')
    setContent('Deposit')
    console.log(name)
    if(width<500){
      setMobile(false)
      console.log('mobile view')
    }
    else if(width>500){
        setMobile(true)
        console.log('desktop view')
    
    }
    getInfo()
   

    },[])

    const getInfo=()=>{
        let user=Cookie.getJSON('user')
        axios.post('/api/info',{user})
        .then((res)=>{
            console.log(res.data)
            setInfo(res.data)
            setGotten(true)
            setLoading(false)
        })
        .catch((err)=>{
            if(err.response.data=='mongo wahala'){
                alert('Unnable to connect to the server please try again later')
                setLoading(false)
               
               }
        })
    }

    const chartOptions={
        legend: {
            display: false,
          },
    }

    const bardata=[
        {
          "country": "AD",
          "hot dog": 127,
          "hot dogColor": "hsl(40, 100%, 50%)",
          "burger": 43,
          "burgerColor": "hsl(62, 70%, 50%)",
        //   "sandwich": 150,
        //   "sandwichColor": "hsl(51, 70%, 50%)",
        //   "kebab": 6,
        //   "kebabColor": "hsl(181, 70%, 50%)",
        //   "fries": 85,
        //   "friesColor": "hsl(89, 70%, 50%)",
        //   "donut": 85,
        //   "donutColor": "hsl(246, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 130,
          "hot dogColor": "hsl(59, 70%, 50%)",
          "fries": 98,
          "friesColor": "hsl(299, 70%, 50%)",
          "burger": 148,
          "burgerColor": "hsl(234, 70%, 50%)",
        //   "sandwich": 115,
        //   "sandwichColor": "hsl(152, 70%, 50%)",
        //   "kebab": 19,
        //   "kebabColor": "hsl(217, 70%, 50%)",
        
        //   "donut": 31,
        //   "donutColor": "hsl(171, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 116,
          "hot dogColor": "hsl(155, 70%, 50%)",
          "burger": 73,
          "burgerColor": "hsl(313, 70%, 50%)",
        //   "sandwich": 33,
        //   "sandwichColor": "hsl(133, 70%, 50%)",
        //   "kebab": 80,
        //   "kebabColor": "hsl(308, 70%, 50%)",
        //   "fries": 14,
          "friesColor": "hsl(341, 70%, 50%)",
          "donut": 144,
        //   "donutColor": "hsl(350, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 35,
          "hot dogColor": "hsl(174, 70%, 50%)",
          "burger": 174,
          "burgerColor": "hsl(263, 70%, 50%)",
        //   "sandwich": 109,
        //   "sandwichColor": "hsl(166, 70%, 50%)",
        //   "kebab": 153,
        //   "kebabColor": "hsl(16, 70%, 50%)",
        //   "fries": 39,
        //   "friesColor": "hsl(268, 70%, 50%)",
        //   "donut": 137,
        //   "donutColor": "hsl(316, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 183,
          "hot dogColor": "hsl(65, 70%, 50%)",
          "burger": 120,
          "burgerColor": "hsl(248, 70%, 50%)",
        //   "sandwich": 191,
        //   "sandwichColor": "hsl(307, 70%, 50%)",
        //   "kebab": 45,
        //   "kebabColor": "hsl(141, 70%, 50%)",
        //   "fries": 8,
        //   "friesColor": "hsl(222, 70%, 50%)",
        //   "donut": 100,
        //   "donutColor": "hsl(221, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 119,
          "hot dogColor": "hsl(154, 70%, 50%)",
          "burger": 184,
          "burgerColor": "hsl(96, 70%, 50%)",
        //   "sandwich": 69,
        //   "sandwichColor": "hsl(33, 70%, 50%)",
        //   "kebab": 90,
        //   "kebabColor": "hsl(346, 70%, 50%)",
          "fries": 144,
          "friesColor": "hsl(233, 70%, 50%)",
        //   "donut": 173,
        //   "donutColor": "hsl(124, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 27,
          "hot dogColor": "hsl(123, 70%, 50%)",
          "burger": 82,
          "burgerColor": "hsl(23, 70%, 50%)",
        //   "sandwich": 56,
        //   "sandwichColor": "hsl(3, 70%, 50%)",
        //   "kebab": 104,
        //   "kebabColor": "hsl(51, 70%, 50%)",
          "fries": 63,
          "friesColor": "hsl(4, 70%, 50%)",
        //   "donut": 148,
        //   "donutColor": "hsl(71, 70%, 50%)"
        }
      ]
    
    const bulletdata=[
        {
          "id": "temp.",
          "ranges": [
            87,
            11,
            75,
            // 0,
            // 100
          ],
          "measures": [
            44
          ],
          "markers": [
            74
          ]
        },
        {
          "id": "power",
          "ranges": [
            0.04552477262763157,
            1.8066390027943298,
            0.12374351897164315,
            0,
            2
          ],
          "measures": [
            0.2217107020154502,
            0.5031682351922404
          ],
          "markers": [
            1.7543603427008534
          ]
        },
        {
          "id": "volume",
          "ranges": [
            4,
            6,
            10,
            21,
            10,
            22,
            0,
            40
          ],
          "measures": [
            11
          ],
          "markers": [
            39
          ]
        },
        {
          "id": "cost",
          "ranges": [
            284315,
            202259,
            84685,
            0,
            500000
          ],
          "measures": [
            158281,
            296496
          ],
          "markers": [
            498152
          ]
        },
        {
          "id": "revenue",
          "ranges": [
            13,
            0,
            11,
            0,
            13
          ],
          "measures": [
            4
          ],
          "markers": [
            11.548534063035833,
            8.9267783326714
          ]
        }
      ]

    const bullet= <ResponsiveBullet
    data={bulletdata}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    spacing={46}
    titleAlign="start"
    // titleOffsetX={-70}
    measureSize={0.2}
/>

    const sunburst=<ResponsiveBar
    data={bardata}
    keys={[ 'hot dog', 'burger',  'fries',  ]}
    indexBy="country"
    margin={{ top: 10, right: 10, bottom: 60, left: 10 }}
    padding={0.3}
    groupMode="grouped"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: '', enabled: false }}
    colors={{ scheme: 'category10' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
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
    
    const pie2=<ResponsivePieCanvas
    data={pieData}
    margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'paired' }}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="#333333"
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
    legends={[
        {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 140,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 14,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: 'circle'
        }
    ]}
/>







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
                name:'Analysis',
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
               <Grid justify='center' spacing={3} container className='container-p'  style={{padding:10,marginTop:50}} >
                    <Grid justify='center'  style={{}} md={8} xs={12} container direction='row' spacing={3}>
        <Grid style={{}} item xs={12} md={6}>
          <Paper className='profile-paper'>
            <Grid direction='row' style={{padding:10,}} container>
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
            <Grid style={{marginTop:-20}} direction='row' justify='center' alignItems='center' container>
                <Grid md={3} xs={3}  item>
                    <AttachMoney className='dollar-sign' style={{height:55,width:55,color:'#ffab00',marginLeft:45}} />
                </Grid>
                <Grid md={9} xs={9} item>
           {gotten ? <h3 className='balance-value'  >{info.balance}.00</h3> : <h5>0.00</h5> }
           
                </Grid>

            </Grid>


            <Grid justify='center' alignItems='center' id='level' style={{marginLeft:1}} direction='row' container>
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
            <Grid id='progress' style={{marginLeft:15}} direction='row' container>
            <Grid item md={3} xs={3} style={{color:'white',}}>
                        Affiliate
                    
                    </Grid>

                    <Grid justify='center' alignItems='center' item md={9} xs={9} style={{color:'white',marginTop:5}}>
                        
                    <LinearProgress color='primary'  style={{height:10,width:'80%',marginTop:9,marginLeft:-8,color:'#ffab00'}} variant="determinate" value={67} />
                    </Grid>
            </Grid>
            <Grid id='progress' style={{marginLeft:15,marginTop:10}} container>
            <Grid item md={2} xs={2} style={{color:'white',}}>
            <PeopleOutline style={{width:40,height:40,color:'#ffab00'}} />
                    
                    </Grid>
                    {/* <div  justify='center' alignItems='center' item md={10} xs={10} style={{color:'white'}}>
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
                   
                    </div> */}
            </Grid>



          </Paper>
        </Grid>
        
            <Grid item style={{}}  direction='column'  xs={12} md={6}>
            <Grid  style={{}} item>
            <Paper xs={12} md={3} style={{height:160}} className='profile-paper'>
              <Grid container  alignItems='center' direction='row'>
               
              <Grid xs={2} md={2} item>
                  <FontAwesomeIcon icon={faBtc} style={{color:'#ffab00',width:40,height:40}} />
              </Grid>

              <Grid style={{}} xs={8} md={8} item >
                 <h5>
           {gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'BTC'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
                 </h5>
              </Grid>

              <Grid xs={2} md={2} item >
                 <ToolTip style={{marginTop:-35,marginLeft:15}} title='Bitcoin wallet ballance'>
                     <IconButton>
                         <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
                     </IconButton>
                 </ToolTip>
              </Grid>
              <Grid style={{}} container>
              <Line
                    style={{marginTop:-15,height:110,}}
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
              </Grid>
              </Grid>
             
          </Paper>
        </Grid>
        <Grid  item>
          <Paper xs={12} md={3} style={{height:160}} className='profile-paper'>
              <Grid container  alignItems='center' direction='row'>
              <Grid xs={2} md={2} item>
                  <FontAwesomeIcon icon={faEthereum} style={{color:'#ffab00',width:40,height:40}} />
              </Grid>

              <Grid xs={8} md={8} item>
                 <h5>
           {gotten ?  <CryptoCompare style={{color:'blue'}} from='USD'  to={'ETH'} amount={info.balance || 0} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> : 0.00}
                 </h5>
              </Grid>

              <Grid xs={2} md={2} item>
                 <ToolTip style={{marginTop:-35,marginLeft:15}} title='Ethereum wallet ballance'>
                     <IconButton>
                         <HelpOutlineIcon style={{height:30,width:30,marginTop:9,color:'#ffab00'}} />
                     </IconButton>
                 </ToolTip>
              </Grid>
              <Grid container>
                    <Line
                    style={{marginTop:-15,height:110}}
                    data={chartExample1.data2}
                    options={chartExample1.options}
                  />
                    </Grid>
              </Grid>
            
          </Paper>
        </Grid>
            </Grid>



            <Grid md={12} xs={12} justify='flex-start' alignItems='flex-start' id='crypto-market' style={{marginTop:20}} item>
                <Paper style={{width:'100%',marginTop:-20}} className='profile-paper bottom-profile'>
                <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={400}></CryptoCurrencyMarket>
                </Paper>
            </Grid>
        

      </Grid>
      <Grid  justify='center' alignItems='center' md={4} xs={12} spacing={3} style={{}} item >
      <Grid style={{}} item xs={12} md={12}>
          <Paper style={{height:345,marginTop:12}} className='profile-paper'>
              <h6 style={{marginBottom:1}}>
                  Market share per asset
              </h6>
            {pieComponent}
          </Paper>
        </Grid>
        <Grid style={{height:500}} item xs={12} md={12}>
          <Paper style={{height:420,padding:0,marginTop:30}} className='profile-paper'>
           
          <TechnicalAnalysis width='100%' symbol={analPair} style={{backgroundColor:'white'}} isTransparent colorTheme="dark"></TechnicalAnalysis>
            
          </Paper>
        </Grid>
      </Grid>
      
     
          
               </Grid>
           )
       }
       else if(content=='Deposit'){
           return (
                
                    <Grid style={{marginTop:50}} container justify='center' alignItems='center'>
                        <Paper style={{}} className='profile-paper deposit-paper'>
                           <Grid item style={{marginBottom:30}} >
                               <h3 style={{textAlign:'center'}}>
                                   Make a <span style={{color:'#ffab00'}}>Deposit</span>
                               </h3>
                           </Grid>
                           <Grid style={{}} item>
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
                                       
                                   }} >{({handleChange,handleSubmit,values})=>(
                                       <Grid container style={{display:'grid',placeItems:'center'}} >

                                           <Grid item justify='center' alignItems='center'>
                                                <Typography style={{textAlign:'center',color:'white',display:'grid',placeItems:'center'}}>
                                                    You can easily make a deposit to your account it is simple and straightforward
                                                </Typography>
                                           </Grid>
                                           <Grid style={{marginTop:50}} id='pair' container direction='row'>
                                                <Grid style={{}} xs={6} md={6} container justify='flex-end' alignItems='center'>
                                                   {depoPair=='BTC' ?  <IconButton style={{border:'5px solid #ffab00',width:120,height:120,marginRight:40}}>
                                                        <motion.div style={{}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                        <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00',}} icon={faBtc} />
                                                        </motion.div>
                                                    </IconButton>
                                                                                                    :
                                                    <IconButton onClick={()=>{setDepoPair('BTC')}}>
                                                    <motion.div style={{marginRight:40}} whileHover={{scale:1.2}}>
                                                    <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} />
                                                    </motion.div>
                                                    </IconButton>
                                                 
                                                }
                                                </Grid>
                                              
                                                <Grid style={{}} xs={6} md={6} container justify='flux-start' alignItems='center'>
                                                   {depoPair=='ETH' ?  <IconButton style={{border:'5px solid #ffab00',width:120,height:120,marginLeft:40}}>
                                                        <motion.div style={{}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                        <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00',}} icon={faEthereum} />
                                                        </motion.div>
                                                    </IconButton>
                                                    :
                                                    <IconButton onClick={()=>{setDepoPair('ETH')}}>
                                                    <motion.div style={{marginLeft:40}} whileHover={{scale:1.2}}>
                                                     
                                                    <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faEthereum} />
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
          onChange={()=>setDeposit(values.amount)}
          onInput={handleChange('amount')}
        //   startAdornment={
        //     <InputAdornment position="start">
        //      <PersonOutline style={{color:"#ffab00"}} />
        //     </InputAdornment>
        //   }
        />

                                <Grid container justify='center' alignItems='center'>
                                
                                        <h3>
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
                                <Grid style={{marginTop:30}} justify='center' alignItems='center' item>
                                    {showDepo
                                    ?
                                    <p align='center' style={{color:'white'}}>
                                    You are about to make an investment of <span style={{color:'#ffab00'}}>${values.amount}</span> You are required to pay the sum of <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={deposit} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                                    to the wallet address {depoPair=='BTC' ? <a style={{color:'#ffab00'}}>bc1q30ljt5azln7ygmtaayuw4lak3ez2cl05qdzg6d</a> : depoPair=='ETH' ? <a style={{color:'#ffab00'}}>0x5B086aF3b099f23f4BC5fc7754aE63484F48AC79</a> : <span></span>} and upload proof of Payment
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





       else if(content=='Withdraw'){
           return (
            <Grid style={{marginTop:50}} container justify='center' alignItems='center'>
            <Paper style={{}} className='profile-paper deposit-paper'>
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
                           <Grid container style={{display:'grid',placeItems:'center'}} >

                               <Grid item justify='center' alignItems='center'>
                                    <Typography style={{textAlign:'center',color:'white',display:'grid',placeItems:'center'}}>
                                        You can easily make a Withdrawal to your designated crypto address within 3 bussiness days, which can be tracked through your reference number
                                    </Typography>
                               </Grid>
                               <Grid style={{marginTop:50}} id='pair' container direction='row'>
                                    <Grid style={{}} xs={6} md={6} container justify='flex-end' alignItems='center'>
                                    {depoPair=='BTC' ?  <IconButton style={{border:'5px solid #ffab00',width:120,height:120,marginRight:40}}>
                                                        <motion.div style={{}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                        <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00',}} icon={faBtc} />
                                                        </motion.div>
                                                    </IconButton>
                                                                                                    :
                                                    <IconButton onClick={()=>{setDepoPair('BTC')}}>
                                                    <motion.div style={{marginRight:40}} whileHover={{scale:1.2}}>
                                                    <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} />
                                                    </motion.div>
                                                    </IconButton>
                                                 
                                                }
                                    </Grid>
                                  
                                    <Grid style={{}} xs={6} md={6} container justify='flex-start' alignItems='center'>
                                    {depoPair=='ETH' ?  <IconButton style={{border:'5px solid #ffab00',width:120,height:120,marginLeft:40}}>
                                                        <motion.div style={{}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                        <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00',}} icon={faEthereum} />
                                                        </motion.div>
                                                    </IconButton>
                                                    :
                                                    <IconButton onClick={()=>{setDepoPair('ETH')}}>
                                                    <motion.div style={{marginLeft:40}} whileHover={{scale:1.2}}>
                                                     
                                                    <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faEthereum} />
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
       else {
        return (
            <Grid direction container style={{padding:30}}>
               <Paper style={{backgroundColor:'#131530',width:'80%',marginTop:100}}>

               </Paper>
            </Grid>
        )
       }
    }

    return (
        <div>

            <AppBar
                title='Inbox'
                color='primary'
                style={{backgroundCololor:"black",height:60,}}

            >
                     <Toolbar>
                  <IconButton onClick={toggleDrawer}>
                  <MenuIcon style={{height:50,width:50,color:"black"}} />
                  </IconButton>
                  <Typography variant='h5'>
                      Dashboard
                  </Typography>
                 <div style={{display:'grid',placeItems:'flex-end',width:'100%'}}>
                 <IconButton onClick={()=>{Router.push('/home')}}>
                    <ToolTip  >
                    <ExitToAppIcon style={{width:40,height:40,color:'black'}} />
                    </ToolTip>
                  </IconButton>
                 </div>
              </Toolbar>

            </AppBar>
             
            

        <Drawer
          dismissible
          open={mobile}
          style={{backgroundColor:'black'}}
          //onOpen={()=>{!mobile ? setContent('') : setOpen(true)}}
          
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
        <DrawerAppContent>
            <div>
            {appContent()}
            </div>
        </DrawerAppContent>
             
        </div>
    )
}

 export default Dashboard;


