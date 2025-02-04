trigger ContactTrigger on Contact (after insert, after update) {
    if(Trigger.IsAfter){
		ContactTriggerHelper.UpdateAccounts(Trigger.New);
    }
}