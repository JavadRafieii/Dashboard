import React from "react";

export default function Cards(props) {
    let background;
    const cards = props.cards.map(card => {
        switch (card.id) {
            case 1:
                background = "bg-gray";
                break;
            case 2:
                background = "bg-primary";
                break;
            case 3:
                background = "bg-green";
                break;

            default: background = "bg-blue";
                break;
        };
        return (
            <div key={card.id} className="col-span-3 bg-white shadow-all rounded-xl p-4">
                <div className="flex justify-between border-b-[1px] pb-2">
                    <div className={`${background} w-16 h-16 rounded-xl -translate-y-8 flex items-center justify-center shadow-all`}>
                        {card.icon}
                    </div>
                    <div>
                        <p className="font-Yekan-Light text-base text-gray-500 text-left">{card.title}</p>
                        <p className="font-Yekan-Bold text-2xl text-gray-900 mt-2 text-left">{card.amount}</p>
                    </div>
                </div>
                <p className="font-Yekan-Light text-lg text-gray-500 pt-3">
                    <span className="font-Yekan-Bold text-green-700">{card.percent}</span>
                    {card.description}
                </p>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-12 gap-5 mt-5">
            <>
                {cards}
            </>
        </div>
    );
};