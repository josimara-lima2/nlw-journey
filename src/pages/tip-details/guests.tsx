import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ConfirmParticipantModal } from "./confirm-participant-modal";
import { DateRange } from "react-day-picker";
interface Participant{
  id: string,
  name: string | null,
  email: string,
  is_confirmed: boolean
}
export function Guests() {
  const { tripId } = useParams()

  const [participants, setParticipants] = useState<Participant[]>([])
  const [participant, setParticipant] = useState<Participant | undefined>()
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDates] = useState<DateRange | undefined>()

  const [isConfirmParticipantModalOpen, setIsConfirmParticipantModalOpen] = useState(false)

  function openConfirmParticipantModal(participant: Participant) {
    setParticipant(participant)
    setIsConfirmParticipantModalOpen(true)
  }
  function closeConfirmParticipantModal() {
    setParticipant(undefined)
    setIsConfirmParticipantModalOpen(false)
  }
  
  useEffect(() => {
    console.log(ownerEmail, ownerName)
    api.get(`trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    
  }, [tripId])
    return (
        <div className="space-y-6">
              <h2 className="font-semibold text-xl">Convidados</h2>
              <div className="space-y-5">
                
          {
            participants.map((participant, index) => {
              return (
<div key={participant.id} className=" flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">{ participant.name ?? `Convidado ${index}` }</span>
                    <span className="block text-sm text-zinc-400 truncate">
                    {participant.email}
                    </span>
                  </div>
                  {participant.is_confirmed ?
                    (<CheckCircle2 className="size-5 text-green-400 shrink-0" />) :
                    (<button onClick={() => openConfirmParticipantModal(participant)}><CircleDashed className="size-5 text-zinc-400 shrink-0" /></button>)}
                </div>
              )
            })
                }
            </div>
              <Button variant="secondary">

            
            <UserCog className="size-5" />
                Gerenciar convidados
        </Button>
        
        {isConfirmParticipantModalOpen && (
          <ConfirmParticipantModal eventStartAndEndDates={eventStartAndEndDates} participantId={participant} destination={'llll'} setOwnerEmail={setOwnerEmail} setOwnerName={setOwnerName}  closeConfirmParticipantModal={closeConfirmParticipantModal} />
        )}
              
            </div>
    )
}