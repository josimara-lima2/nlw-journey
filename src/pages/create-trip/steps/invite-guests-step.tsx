import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";
interface InviteGuestsStepProps{
    openGuestsModal: () => void,
    emailsToInvite: string[],
    openConfirmTripModal: () => void
}
export function InviteGuestsStep({emailsToInvite, openConfirmTripModal,openGuestsModal}:InviteGuestsStepProps) {
    return (
        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
          <button onClick={openGuestsModal} type="button" className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (<span className="text-zinc-100">{emailsToInvite.length } pessoa(s) convidada(s)</span>): (<span className=" text-lg text-zinc-400  flex-1 text-left">Quem estará na viagem?</span>)}
          </button>
          
        <div className="w-px h-6 bg-zinc-800"></div>
        <Button onClick={openConfirmTripModal} >
 Confirmar viagem
            <ArrowRight className="size-5" />
        </Button>
             
        </div>
    )
}