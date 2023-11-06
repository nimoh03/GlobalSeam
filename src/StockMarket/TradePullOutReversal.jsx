import TradeUploadDetailComponent from "../Component/TradeUploadDetailComponent"

const TradePullOutReversal = () => {
    const name = ' NASD Trade Pull Out- Reversal'

    return(
        <div className="body">
            <TradeUploadDetailComponent name={name} />
        </div>
    )
}

export default TradePullOutReversal