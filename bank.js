const { boxAlignments } = require("@nivo/core")

<Grid className='crypto-dashboard' md={12} xs={12} justify='center'   style={{height:400}} container>
              
<Paper style={{width:'97%',}} className='profile-paper bottom-profile'>
 <CryptoCurrencyMarket colorTheme="dark" width="100%" isTransparent={true} height={400}></CryptoCurrencyMarket>
 </Paper>

</Grid>

const ballance box



<Grid justify='center' spacing={3} style={{height:400,width:'100%'}} container xs={12} md={6}>
<Paper style={{width:'90%'}}  className='profile-paper balance-paper'>
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
          <AttachMoney className='dollar-sign' style={{height:55,width:55,color:'#ffab00',marginLeft:45}} />
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



crypto ballance