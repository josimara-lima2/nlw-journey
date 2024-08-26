import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";
interface Participant{
  id: string,
  name: string | null,
  email: string,
  is_confirmed: boolean
}
interface ConfirmTripModalProps {
  closeConfirmParticipantModal: () => void,
  setOwnerName: (name: string) => void,
  setOwnerEmail: (email: string) => void,
  destination: string,
  participantId: Participant | undefined,
  eventStartAndEndDates: DateRange | undefined
}
export function ConfirmParticipantModal({closeConfirmParticipantModal, participantId, setOwnerEmail, setOwnerName }: ConfirmTripModalProps) {


  async function confirmParticipant() {
    console.log('aqui')
    await api.get(`participants/${participantId?.id}/confirm`)

    window.document.location.reload()
  }

    // const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ?
    // format(eventStartAndEndDates.from, "d ' de ' LLL").concat(' até  ').concat(format(eventStartAndEndDates.to, "d ' de ' LLL")) : null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Confirmar participação na viagem</h2>
            <button onClick={closeConfirmParticipantModal} ><X className="size-5 text-zinc-400" /></button>
          </div>
          {/* <p className="text-sm text-zinc-400">
            Você foi convidado para participar de uma viagem para <span className="text-zinc-100 font-semibold">{destination}</span> nas datas de <span className="text-zinc-100 font-semibold"> {displayedDate}</span>
          </p> */}
          <p className="text-sm text-zinc-400">Para confirmar sua presença na viagem, preencha os dados abaixo:</p>
        </div>


        <form onSubmit={confirmParticipant} className=" space-y-3">
          <div className="px-4 flex items-center gap-2 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg ">
            <User className="size-5 text-zinc-400" />
            <input onChange={event => setOwnerName(event.target.value)} type="text" name="user" placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>
          <div className="px-4 flex items-center gap-2 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg ">
            <Mail className="size-5 text-zinc-400" />
            <input onChange={event => setOwnerEmail(event.target.value)} type="email" name="email" placeholder="Seu email" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem


          </Button>
        </form>
      </div>
    </div>
  )
}