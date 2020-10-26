class Inbox {
  domain: string;

  email: string;
}

class Requester {
  id?: string;

  multiChannelId?: string;

  email: string;

  name: string;
}

class Comment {
  content: string;
}

export class CreateTicketDto {
  readonly inbox: Inbox;

  readonly requester?: Requester;

  readonly comments?: {
    description?: Comment;
    internal?: Comment;
    public?: Comment;
    multiChannel?: Comment;
    forwardReply?: Comment;
  };
}

export class SearchParams {
  readonly status?:
    | 'novo'
    | 'pendente'
    | 'novo'
    | 'resolvido'
    | 'andamento'
    | 'cancelado'
    | 'rejeitado';

  readonly priority?: 'alta' | 'media' | 'baixa';

  readonly type?:
    | 'problema'
    | 'nao-especificado'
    | 'tarefa'
    | 'duvida'
    | 'incidente';

  readonly idRequester?: string;

  readonly idAssigned?: string;

  readonly idGroupAssigned?: string;

  readonly idSubject?: string;

  readonly idTopicGroup?: string;

  readonly idParticipants?: string;

  readonly tags?: string;

  readonly idProduct?: string;

  readonly idOrganization?: string;

  readonly customField?: string;

  readonly lastDateUpdate?: string;

  readonly openDate?: string;

  readonly sortBy?:
    | 'number'
    | 'done_date'
    | 'last_date_update'
    | 'open_date'
    | 'requester_name'
    | 'current_status_name'
    | 'assigned_name'
    | 'priority_name'
    | 'sla_due_date';

  readonly sortDirection?: 'asc' | 'desc';

  readonly outputDataSet?: string;

  readonly take?: string;

  readonly page?: string;

  readonly searchId?: string;
}
