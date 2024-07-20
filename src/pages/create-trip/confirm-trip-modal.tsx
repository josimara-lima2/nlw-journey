import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void,
    createTrip: (event: FormEvent<HTMLFormElement>) => void
    setOwnerName:(name: string) => void,
  setOwnerEmail: (email: string) => void,
  destination: string,
  eventStartAndEndDates: DateRange | undefined
}
export function ConfirmTripModal({ closeConfirmTripModal, createTrip, setOwnerEmail, setOwnerName, destination, eventStartAndEndDates }: ConfirmTripModalProps) {
    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ?
    format(eventStartAndEndDates.from, "d ' de ' LLL").concat(' até  ').concat(format(eventStartAndEndDates.to, "d ' de ' LLL")) : null

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
               <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                <button onClick={closeConfirmTripModal}><X className="size-5 text-zinc-400"/></button>
            </div>
            <p className="text-sm text-zinc-400">
              Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">{destination}</span> nas datas de <span className="text-zinc-100 font-semibold"> { displayedDate}</span> preencha seus dados abaixo:
            </p>
            </div>
            
        
            <form onSubmit={createTrip} className=" space-y-3">
              <div className="px-4 flex items-center gap-2 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg ">
                 <User className="size-5 text-zinc-400" />
             <input onChange={event => setOwnerName(event.target.value)} type="text" name="user" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>
            <div className="px-4 flex items-center gap-2 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg ">
                 <AtSign className="size-5 text-zinc-400" />
             <input  onChange={event => setOwnerEmail(event.target.value)} type="email" name="email" placeholder="Digite o email do convidado" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
             </div>
          
              <Button type="submit" variant="primary" size="full">
                Confirmar criação da viagem

           
            </Button>
            </form>
          </div>
        </div>
    )
}