import { useState } from 'react';
import { Message } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonItem,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert
} from '@ionic/react';
import './Loan.css';

const Loan: React.FC = () => {

  const [year,setYear]=useState<number>(0);
  const [months,setMonths]=useState<number>(0);
  const [amount,setAmount]=useState<number>(0);
  const [rate,setrate]=useState<number>(0);
  const [period,setPeriod]=useState<number>(0);
  const [result,setresult]=useState<Message[]>([]);
  const [flag,setflag]=useState(false);
  const[err,seterr]=useState('');
  const calculate=(e:any) => {
    e.preventDefault();
    if(amount === 0){
      seterr('please enter amount');
    }else if(rate === 0){
      seterr('please enter rate of interest');
    }else if(year == 0 && months==0){
      seterr('please enter Loan Period');
    }
    else{
      
      var month = 0;
      console.log(typeof(year),year,typeof(months),months);
      if(year != 0 && months!=0){
          month = parseInt((year * 12).toString()) + parseInt(months.toString()); 
      }else if(year != 0){
         month= year * 12 ;
      }else{
        month = months;
      }
      console.log(typeof(month), month,typeof(year),year,typeof(months),months);
    var i;
    month = parseInt(month.toString());
    console.log(typeof(month));
    for (i=1;i<=month;i++){
      
    let payment1=((amount * rate/1200) * Math.pow((1+rate/1200),month))/(Math.pow((1+rate/1200),month)-1)
    let pp1 = payment1 * Math.pow(1+rate/1200,(i-1-(month)));
    let int1=payment1-pp1;
    let loanBalance = (int1/(rate/1200))-pp1;

    console.log(payment1);
    let row={
      payment : Math.round(payment1*100)/100,
      pp : Math.round(pp1*100)/100,
      int: Math.round(int1*100)/100,
      loanBalance: Math.round(loanBalance*100)/100
    }
    console.log(row);
    setresult(result =>[...result,row]);
  }
  setflag(true);
  }
  
  
  };
  const clear=()=>{
    setflag(false);
    setresult([]);
    setAmount(0);
    setPeriod(0);
    setrate(0);
    setMonths(0);
    setYear(0);
  }
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center'>Loan Repayment Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Loan Payment
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {err && <IonAlert isOpen={!!err} message={err} buttons={[{
              text: 'Ok',
              handler: () => {
                seterr('');
              }
            }]}></IonAlert>}
        { !flag ?
        <div className='container'>
        <IonList class='form'>

          <IonItemDivider></IonItemDivider>
          <IonItem class='ion-margin'>
            <IonLabel position='floating'>Loan Amount</IonLabel>
            <IonInput type="number"  placeholder="" onIonChange={(e:any) => setAmount(e.target.value)} clearInput required></IonInput>
          </IonItem>

          <IonItem class='ion-margin'>
            <IonLabel position="floating">Rate of Interest</IonLabel>
            <IonInput type='number' onIonChange={(e:any) => setrate(e.target.value)} required></IonInput>
          </IonItem>

          <IonItem class='ion-margin'>
            <IonLabel position='floating'>Loan Period(years)</IonLabel>
            <IonInput type="number"  placeholder="Enter Loan period in years" onIonChange={(e:any) => setYear(e.target.value)}clearInput required></IonInput>
          </IonItem>
          <IonItemDivider class='ion-margin-start'>Or</IonItemDivider>.
          <IonItem class='ion-margin'>
            <IonLabel position='floating'>Loan Period(months)</IonLabel>
            <IonInput type="number"  placeholder="Enter Loan period in Months" onIonChange={(e:any) => setMonths(e.target.value)}clearInput required></IonInput>
          </IonItem>
          
          <IonItem class='ion-margin'>
            <IonButton class='calculate' onClick={e => calculate(e)} type='submit'>Calculate</IonButton>
          </IonItem>
        </IonList>
        </div>
        :
        <div>
           <IonGrid>
                <IonRow class='ion-margin'>
                 <IonCol>Payment No.</IonCol>
                 <IonCol>Payment Amount</IonCol>
                 <IonCol>Principal Amount Paid</IonCol>
                 <IonCol>Interest Amount Paid</IonCol>
                 <IonCol>Loan Outstanding balance</IonCol>
               </IonRow>
             {result.map((row,index) => (
               <IonRow class='ion-margin' key={index}>
                 <IonCol>{index+1}</IonCol>
                 <IonCol>{row.payment}</IonCol>
                 <IonCol>{row.pp}</IonCol>
                 <IonCol>{row.int}</IonCol>
                 <IonCol>{row.loanBalance}</IonCol>
               </IonRow>
             ))}
              <IonRow></IonRow>
            </IonGrid> 
            <IonButton class='calculate' onClick={clear}>Back</IonButton>
        </div>
        }

      </IonContent>
    </IonPage>
  );
};

export default Loan;
